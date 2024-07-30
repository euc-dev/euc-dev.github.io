# Omnissa Developer Portal

Welcome to the Omnissa developer portal repository.

This repo stores the developer.omnissa.com site in markdown format using MkDocs with the Material theme.

This site is using MkDocs as the site renderer, and GitHub Pages as the hoster. As such, this repo will create a publicly available site at [https://euc-dev.github.io](https://euc-dev.github.io). A CNAME record points [https://developer.omnissa.com](https://developer.omnissa.com) to this site.

This site uses submodules and the MkDocs [monorepo](https://backstage.github.io/mkdocs-monorepo-plugin/) plugin to merge content from other repos to be rendered as a single site, within this site. All documentation should be created in MarkDown format with the capabilities of MkDocs and the Material theme in mind under the `/docs` folder.

Only pages within the `/docs` folder should be modified within this repo. All other content pages belong to submodules that should be modified within that repo and pushed / updated into this one.

## Getting Started

To get started:

- first fork the repo as per instructions in [CONTRIBUTING.md](CONTRIBUTING.md)
- Next initialize the submodules within the repo:

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

- Lastly, edit the content pages under the `/docs` folder

## /docs Folder Structure

A common folder structure has been created to allow for other repos containing product specific documentation and resources to be merged into this site using [git-submodules](https://github.blog/2016-02-01-working-with-submodules/) and [monorepo](https://backstage.github.io/mkdocs-monorepo-plugin/). This allows for those other repos to be maintained by the teams that own them.

### Folder Structure and Included Content

```bash

├── .docs
    ├── about
    │    └── index.md
    ├── apis
    │    └── index.md
    ├── assets
    │    ├── fonts
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
    ├── product-docs
    │    └── index.md
    ├── samples
    │    └── index.md
    ├── sdks
    │    └── index.md
    ├── support
    │    └── index.md
    └── terraform
         └── index.md

```

### Git-Submodule Content

The following folders have content provided by other repos using git-submodule. Do not edit the contents of these folders, simply run `git submodule update --recursive` to update from the source repo.

```bash

├── .docs
    ├── apis
    │       <- [/app-volumes-apis](/apis/app-volumes-apis/)
    │       <- [/horizon-apis](/apis/horizon-apis/)
    │       <- [/ws1-access-apis](/apis/ws1-access-apis/)
    │       <- [/ws1-identity-services-api](/apis/ws1-identity-services-api/)
    │       <- [/ws1-uem-apis](/apis/ws1-uem-apis/)
    │       <- [/ws1-api-intelligence](/apis/ws1-api-intelligence/)
    ├── powercli
    │       <- [/horizon-powercli](/powercli/horizon-powercli/)
    ├── samples
    │       <- [/euc-samples](/samples/euc-samples/)
    ├── sdks
    │       <- [/horizon-sdks](/sdks/horizon-sdks/)
    │       <- [/ws1-sdk-uem-android](/sdks/ws1-sdk-uem-android/)
    │       <- [/ws1-sdk-intelligence](/sdks/ws1-sdk-intelligence/)
    │       <- [/ws1-sdk-uem-ios](/sdks/ws1-sdk-uem-ios/)
    ├── terraform
    │       <- [/horizon-terraform](/terraform/horizon-terraform/)
```

***Note***
    Because of the linkage between other repos, this site must be built after changes to the other sites have been pushed.
    This means, you must run `git submodule update --recursive` before committing any code and pulling.

## License

This project is Licensed under the BSD 2-Clause License (Mozilla Public License Version 2.0) ; you may not use this file except in compliance with the License. 

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
