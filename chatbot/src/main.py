import os
import logging
from datetime import datetime, timezone
from multiprocessing import Pool, TimeoutError
from time import gmtime
from typing import Optional
from fastapi import FastAPI, Header, Response, HTTPException
from normalizer import normalize_text
import torch
from transformers import T5ForConditionalGeneration, T5Tokenizer

MAX_INPUT_LENGTH = int(os.environ['MAX_INPUT_LENGTH'])
MAX_OUTPUT_LENGTH = int(os.environ['MAX_OUTPUT_LENGTH'])
TOKENIZER_PATH = os.environ.get('TOKENIZER_PATH', os.path.join(
    os.path.dirname(__file__), 'tokenizer'))
MODEL_PATH = os.environ.get('MODEL_PATH', os.path.join(
    os.path.dirname(__file__), 'model'))

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


def generate(input_ids, attention_mask, do_sample, num_beams, top_k, top_p, repetition_penalty, num_return_sequences):
    return model.generate(
        input_ids=input_ids, attention_mask=attention_mask,
        max_length=MAX_OUTPUT_LENGTH,
        do_sample=do_sample,
        num_beams=num_beams,
        top_k=top_k,
        top_p=top_p,
        repetition_penalty=repetition_penalty,
        num_return_sequences=num_return_sequences
    )


@app.on_event("startup")
async def startup_event():
    global tokenizer, model

    tokenizer = T5Tokenizer.from_pretrained(TOKENIZER_PATH, is_fast=True)
    model = T5ForConditionalGeneration.from_pretrained(MODEL_PATH)
    model.eval()


@app.get("/talk")
def generate(response: Response, input: str, do_sample: bool = False, num_beams: Optional[int] = 1, top_k: Optional[int] = 50, top_p: Optional[float] = 1.0, repetition_penalty: Optional[float] = 1.0, num_return_sequences: Optional[int] = None, timeout: int = 60, origin: Optional[str] = Header(None)):
    try:
        if origin is not None:
            response.headers['Access-Control-Allow-Origin'] = origin

        start = datetime.now(timezone.utc).timestamp()
        batch = tokenizer.batch_encode_plus([normalize_text(input.replace(
            '\n', ''))], max_length=MAX_INPUT_LENGTH, truncation=True, padding='longest', return_tensors='pt')

        with Pool(processes=1) as p:
            result = p.apply_async(generate, (batch['input_ids'], batch['attention_mask'], do_sample, num_beams, top_k, top_p, repetition_penalty, num_return_sequences))
            outputs = result.get(timeout=timeout)
            end = datetime.now(timezone.utc).timestamp()

            return {"outputs": [tokenizer.decode(ids, skip_special_tokens=True, clean_up_tokenization_spaces=False) for ids in outputs], "took": round(end - start, 3), "timestamp": int(end)}

    except Exception as e:
        logging.error(f'{e}')

        raise HTTPException(status_code=400, detail=str(e))
