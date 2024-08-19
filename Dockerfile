#############################################################################
# build markdown to html

# get python image to create static pages
FROM python:alpine AS builder

# install require pyton packages (mkdocs, etc)
WORKDIR /workspace
COPY requirements.txt .
RUN apk add git && \
    pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# build the static pages
COPY . .
RUN mkdocs build -f mkdocs.yml

#############################################################################
# build the final image with content from builder

# get base image
FROM httpd:2.4-alpine AS final

WORKDIR /usr/local/apache2/htdocs/

# add metadata via labels
LABEL com.omnissa.developer.version="0.0.1"
LABEL com.omnissa.developer.git.repo="https://github.com/euc-dev/euc-dev.github.io"

# copy the html to wwwroot
COPY --from=builder /workspace/.site ./

#############################################################################
# vim: ft=unix sync=dockerfile ts=4 sw=4 et tw=78:
