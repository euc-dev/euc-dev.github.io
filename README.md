# Omnissa Developer Portal

Welcome to the Omnissa developer portal repository.

This repo stores the https://developer.omnissa.com site in markdown format using MkDocs with the Material theme.

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

## Testing

Please refer to [TESTING.md](./TESTING.md) for information on the requirements and process to test the site locally.

## /docs Folder Structure

A common folder structure has been created to allow for other repos containing product specific documentation and resources to be merged into this site using [git-submodules](https://github.blog/2016-02-01-working-with-submodules/) and [monorepo](https://backstage.github.io/mkdocs-monorepo-plugin/). This allows for those other repos to be maintained by the teams that own them.

The structure adheres to MkDocs standards, and and utilises overrides and additional assets to create a taylored site.

### Folder Structure and Included Content

```bash
├── docs
    ├── about
    │   └── index.md
    ├── apis
    │   └── index.md
    ├── assets
    │   ├── fonts
    │   │   └── ...
    │   ├── images
    │   │   └── ...
    │   ├── javascripts
    │   │   └── ...
    │   ├── logos
    │   │   └── ...
    │   └── stylesheets
    │   │   └── ...
    ├── dev-centre
    │   ├── index.md
    │   ├── ws1
    │   │   ├── core-capabilities.md
    │   │   └── index.md
    │   └── ws1-intel
    │       ├── core-capabilities.md
    │       └── index.md
    ├── index.md
    ├── powercli
    │   └── index.md
    ├── product-docs
    │   └── index.md
    ├── samples
    │   └── index.md
    ├── sdks
    │   └── index.md
    ├── support
    │   └── index.md
    └── terraform
        └── index.md
```

### Git-Submodule Content

The following folders have content provided by other repos using git-submodule. Do not edit the contents of these folders, simply run `git submodule update --recursive` to update from the source repo.

```bash

├── .docs
    ├── apis
    │   ├── app-volumes-apis <- [https://github.com/euc-dev/app-volumes-apis](app-volumes-apis)
    │   ├── horizon-apis <- [https://github.com/euc-dev/horizon-apis](horizon-apis)
    │   ├── ws1-access-apis <- [https://github.com/euc-dev/ws1-access-apis](ws1-access-apis)
    │   ├── ws1-api-intelligence <- [https://github.com/euc-dev/ws1-api-intelligence](ws1-api-intelligence)
    │   ├── ws1-identity-services-api <- [https://github.com/euc-dev/ws1-identity-services-api](ws1-identity-services-api)
    │   ├── ws1-notification-services-api <- [https://github.com/euc-dev/ws1-notification-services-api](ws1-notification-services-api)
    │   └── ws1-uem-apis <- [https://github.com/euc-dev/ws1-uem-apis](ws1-uem-apis)
    ├── powercli
    │   └── horizon-powercli <- [https://github.com/euc-dev/horizon-powercli](horizon-powercli)
    ├── samples
    │   └── euc-samples <- [https://github.com/euc-dev/euc-samples](euc-samples)
    ├── sdks
    │   ├── horizon-sdk <- [https://github.com/euc-dev/horizon-sdks](horizon-sdks)
    │   ├── ws1-sdk-intelligence <- [https://github.com/euc-dev/ws1-sdk-intelligence](ws1-sdk-intelligence)
    │   ├── ws1-sdk-uem-android <- [https://github.com/euc-dev/ws1-sdk-uem-android](ws1-sdk-uem-android)
    │   └── ws1-sdk-uem-ios <- [https://github.com/euc-dev/ws1-sdk-uem-ios](ws1-sdk-uem-ios)
    └── terraform
        └── horizon-terraform <- [https://github.com/euc-dev/horizon-terraform](horizon-terraform)
```

***Note***
    Because of the linkage between other repos, this site must be built after changes to the other sites have been pushed.
    This means, you must run `git submodule update --recursive --force` before committing any code and pulling.

## License

This project is Licensed under the Creative Commons Attribution 4.0 International as described in [LICENSE](./LICENSE); you may not use this file except in compliance with the License. 

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
