# Omnissa Developer Portal

Welcome to the End User Computing developer portal proof-of-concept repository.

This repo stores the developer.omnissa.com POC site in markdown format using MkDocs with the Material theme. 

This site is using MkDocs as the site renderer, and GitHub Pages as the hoster. As such, this repo will create a publically available site at https://euc-dev.github.io. A custom domain name will be setup to point to developer.lab.net for the POC. If the POC is successful this will be changed to https://developer.omnissa.com in conjunction with decommissioning of the existing site.

Multiple repos are linked into this site by utilising a common folder structure and site_url.

## Getting Started

```bash
git checkout . . .
cd euc-dev.github.io/
git submodule init
git submodule update --recursive
code .
# click the "reopen in container" in VSCode pop-up dialogue
./scripts/03-serve.sh
# click on the "Open in browser" in VSCode pop-up dialogue 
```

## docs Folder Structure

A common folder structure has been created to allow for other repos containing product specific documentation and resources to be merged into this site using [git-submodules](https://github.blog/2016-02-01-working-with-submodules/) and [monorepo](https://backstage.github.io/mkdocs-monorepo-plugin/). This allows for those other repos to be maintained by the teams that own them.

### Folder Structure and Included Content

```bash

├── .docs
    ├── apis
    │    └── index.md
    ├── assets
    │    ├── images
    │    ├── javascripts
    │    ├── logos
    │    └── stylesheets
    ├── dev-centre
    │    ├── ws1
    │    │    └── index.md
    │    └── ws1-intel
    │    │    └── index.md
    ├── powercli
    │    └── index.md
    ├── samples
    │    └── index.md
    ├── sdks
    │    └── index.md
    └── support
         └── index.md

```

### Git-Submodule Content

The following folders have content provided by other repos using git-submodule. Do not edit the contents of these folders, simply run `git submodule update --recursive` to update from the source repo.

```bash

├── .docs
    ├── apis
    │       <- [/apis/app-volumes-apis](/apis/app-volumes-apis/)
    │       <- [/apis/horizon-apis](/apis/horizon-apis/)
    │       <- [/apis/ws1-access-apis](/apis/ws1-access-apis/)
    │       <- [/apis/ws1-uem-intelligence](/apis/ws1-uem-intelligence/)
    │       <- [/apis/ws1-api-intelligence](/apis/ws1-api-intelligence/)
    ├── assets
    │       <- [/apis/branding](/apis/branding/) (future)
    ├── powercli
    │       <- [/apis/horizon-powercli](/apis/horizon-powercli/)
    ├── samples
    │       <- [/apis/euc-samples](/apis/euc-samples/)
    │       <- [/apis/ws1-sdk-integration-samples](/apis/ws1-sdk-integration-samples/)
    ├── sdks
    │       <- [/apis/horizon-sdks](/apis/horizon-sdks/)
    │       <- [/apis/ws1-sdk-uem-android](/apis/ws1-sdk-uem-android/)
    │       <- [/apis/ws1-sdk-intelligence](/apis/ws1-sdk-intelligence/)
    │       <- [/apis/ws1-sdk-uem-ios](/apis/ws1-sdk-uem-ios/)

```

!!! Note
    Because of the linkage between other repos, this site must be built after changes to the other sites.
    This means, you must run `git submodule update --recursive` before committing any code and pulling.
