FROM python:3.8

WORKDIR /app/backend/

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY . .

CMD ["python", "run", "calculation/calculation.py"]
