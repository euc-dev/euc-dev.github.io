FROM mcr.microsoft.com/devcontainers/base:bullseye
RUN apt-get update && \
    export DEBIAN_FRONTEND=noninteractive && \
    apt-get -y install --no-cache \
        python3 \
        python3-pip && \
    apt clean
