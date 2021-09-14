FROM mongo:latest

# Workdir config directory
WORKDIR /usr/src/configs

# Copy scripts
COPY replicaSet.js .
COPY setup.sh .
COPY facts.js .

# For debug only
#RUN apt-get update && apt-get install -y iputils-ping
ENTRYPOINT [ "/bin/bash" ]
CMD ["./setup.sh"]