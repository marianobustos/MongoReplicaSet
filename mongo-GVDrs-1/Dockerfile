FROM mongo:latest

# Workdir config directory
WORKDIR /etc

# Copy configs to container root
COPY config/ .

EXPOSE 27017

RUN apt-get update && apt-get install -y iputils-ping

CMD ["mongod", "--config", "./mongod.conf.orig", "--bind_ip_all"]