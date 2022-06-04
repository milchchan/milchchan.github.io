import os
import asyncio
import logging
from datetime import datetime, timezone
from time import gmtime
from typing import Optional, Callable
from fastapi import FastAPI, Header, Request, Response, HTTPException
from fastapi.responses import JSONResponse
from starlette.types import ASGIApp
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.middleware.cors import CORSMiddleware
from starlette.status import HTTP_504_GATEWAY_TIMEOUT
from normalizer import normalize_text
import torch
from transformers import T5ForConditionalGeneration, T5Tokenizer


TIMEOUT = os.getenv("TIMEOUT", 30)
MAX_INPUT_LENGTH = int(os.environ['MAX_INPUT_LENGTH'])
MAX_OUTPUT_LENGTH = int(os.environ['MAX_OUTPUT_LENGTH'])
TOKENIZER_PATH = os.environ.get('TOKENIZER_PATH', os.path.join(
    os.path.dirname(__file__), 'tokenizer'))
MODEL_PATH = os.environ.get('MODEL_PATH', os.path.join(
    os.path.dirname(__file__), 'model'))


class TimeoutMiddleware(BaseHTTPMiddleware):
    """
    Return gateway timeout error (504)
    if the request processing time is above a certain threshold
    """

    def __init__(self, app: ASGIApp, timeout: int = 30):
        super().__init__(app)
        self.timeout = int(timeout)

    async def dispatch(self, request: Request, call_next: Callable) -> Response:
        try:
            return await asyncio.wait_for(call_next(request), timeout=self.timeout)

        except asyncio.TimeoutError:
            return JSONResponse(content={'detail': 'Processing time limit exceeded'}, status_code=HTTP_504_GATEWAY_TIMEOUT)


file_handler = logging.FileHandler(
    './logs/chatbot.log', mode='a', encoding='utf-8')
formatter = logging.Formatter(
    fmt='%(asctime)s.%(msecs)03dZ - %(levelname)s - %(message)s', datefmt='%Y-%m-%dT%H:%M:%S')
formatter.converter = gmtime
file_handler.setFormatter(formatter)
logger = logging.getLogger('uvicorn')
logger.addHandler(file_handler)

tokenizer = None
model = None

app = FastAPI()
app.add_middleware(TimeoutMiddleware, timeout=TIMEOUT)
app.add_middleware(CORSMiddleware, allow_origins=[
                   '*'], allow_credentials=True, allow_methods=['*'], allow_headers=['*'])


@app.on_event("startup")
async def startup_event():
    global tokenizer, model

    tokenizer = T5Tokenizer.from_pretrained(TOKENIZER_PATH, is_fast=True)
    model = T5ForConditionalGeneration.from_pretrained(MODEL_PATH)
    model.eval()


@app.get("/talk")
def generate(response: Response, input: str, do_sample: bool = False, num_beams: Optional[int] = 1, top_k: Optional[int] = 50, top_p: Optional[float] = 1.0, repetition_penalty: Optional[float] = 1.0, num_return_sequences: Optional[int] = None, origin: Optional[str] = Header(None)):
    try:
        if origin is not None:
            response.headers['Access-Control-Allow-Origin'] = origin

        start = datetime.now(timezone.utc).timestamp()
        batch = tokenizer.batch_encode_plus([normalize_text(input.replace(
            '\n', ''))], max_length=MAX_INPUT_LENGTH, truncation=True, padding='longest', return_tensors='pt')
        outputs = model.generate(
            input_ids=batch['input_ids'], attention_mask=batch['attention_mask'],
            max_length=MAX_OUTPUT_LENGTH,
            do_sample=do_sample,
            early_stopping=True,
            num_beams=num_beams,
            top_k=top_k,
            top_p=top_p,
            repetition_penalty=repetition_penalty,
            num_return_sequences=num_return_sequences,
            max_time=TIMEOUT
        )
        end = datetime.now(timezone.utc).timestamp()

        return {"outputs": [tokenizer.decode(ids, skip_special_tokens=True, clean_up_tokenization_spaces=False) for ids in outputs], "took": round(end - start, 3), "timestamp": int(end)}

    except Exception as e:
        logging.error(f'{e}')

        raise HTTPException(status_code=400, detail=str(e))
