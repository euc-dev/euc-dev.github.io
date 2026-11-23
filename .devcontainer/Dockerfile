FROM mcr.microsoft.com/devcontainers/base:bookworm@sha256:06701e75787b0b948709e803f95b42cabf37607b1c308c57471d6f0252149d87
RUN apt-get update && \
    export DEBIAN_FRONTEND=noninteractive && \
    apt-get -y install \
        python3 \
        python3-pip && \
    apt clean && \
    rm -rf /usr/lib/python3.11/EXTERNALLY-MANAGED
