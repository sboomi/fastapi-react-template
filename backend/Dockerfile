FROM python:3.9.5-slim-buster

# Create workdir app
WORKDIR /app

# Install app dependencies
COPY requirements.txt .

RUN pip install -r requirements.txt

# Copy data in folder
COPY . /app

EXPOSE 8000

CMD ["python", "./main.py"]