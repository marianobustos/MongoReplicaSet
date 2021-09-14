FROM mongo:latest

# Workdir config directory
WORKDIR /etc

# Copy configs to container root
COPY config/ .

# For debug only
#RUN apt-get update && apt-get install -y iputils-ping

CMD ["mongod", "--config", "./mongod.conf"]