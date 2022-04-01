FROM python:3.9-slim
ENV MAX_INPUT_LENGTH=16
ENV MAX_OUTPUT_LENGTH=16
ENV TOKENIZER_PATH=/app/tokenizer
ENV MODEL_PATH=/app/model
WORKDIR /app
COPY ./requirements.txt .
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt
COPY ./src .
COPY ./tokenizer $TOKENIZER_PATH
COPY ./model $MODEL_PATH
EXPOSE 8000
CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "8000"]