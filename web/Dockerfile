FROM python:3.10-alpine3.15


ENV PYTHONDONTWRITEBYTECODE 1


ENV PYTHONUNBUFFERED 1
WORKDIR /app

# Copy the requirements file into the container at /app
COPY ./requirements.txt /app/

# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt




# Copy the application code into the container at /app
COPY . /app

# Set the environment variables
ENV PORT=8000

# Command to run the application
RUN chmod 755 /app/gunicorn_starter.sh
ENTRYPOINT [ "./gunicorn_starter.sh" ]