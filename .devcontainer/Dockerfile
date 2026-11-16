FROM mcr.microsoft.com/devcontainers/base:bookworm@sha256:85a349062e4ccc4755304f1264183e604391697608765e72765340b7cb7e2438
RUN apt-get update && \
    export DEBIAN_FRONTEND=noninteractive && \
    apt-get -y install \
        python3 \
        python3-pip && \
    apt clean && \
    rm -rf /usr/lib/python3.11/EXTERNALLY-MANAGED
