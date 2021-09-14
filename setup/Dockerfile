FROM mongo:latest

# Workdir config directory
WORKDIR /usr/src/configs

# Copy scripts
COPY replicaSet.js .
COPY setup.sh .
COPY facts.js .

ENTRYPOINT [ "/bin/bash" ]
CMD ["./setup.sh"]