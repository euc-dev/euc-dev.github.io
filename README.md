# Omnissa Developer Portal

Welcome to the Omnissa Developer Portal repository.

This repo stores the https://developer.omnissa.com site in markdown format using MkDocs with the Material theme.

This site is using MkDocs as the site renderer, and GitHub Pages as the hoster. As such, this repo will create a publicly available site at [https://euc-dev.github.io](https://euc-dev.github.io). A CNAME record and GitHub Pages configuration points [https://developer.omnissa.com](https://developer.omnissa.com) to this site.

This site uses submodules and the MkDocs [monorepo](https://backstage.github.io/mkdocs-monorepo-plugin/) plugin to merge content from other repos to be rendered as a single site, within this site. All documentation should be created in MarkDown format with the capabilities of MkDocs and the Material theme in mind under the `/docs` folder.

Only pages within the `/docs` folder should be modified within this repo. All other content pages belong to submodules that should be modified within that repo and pushed / updated into this one.

## Getting Started

To get started:

1. Please familiarize yourself with the [Code of Conduct](https://github.com/euc-dev/.github/blob/main/CODE_OF_CONDUCT.md) and [Developer Certificate of Origin](https://github.com/euc-dev/.github/blob/main/Developer%20Certificate%20of%20Origin.md) before contributing.
2. Read the [LICENSE](./LICENSE)
3. Fork the repo as per instructions in [CONTRIBUTING.md](https://github.com/euc-dev/.github/blob/main/CONTRIBUTING.md)
4. Next initialize the submodules within the repo to include the content from those submodules. See [Initialize Submodules](#initializing-submodules)
5. Edit the content pages under the `/docs` folder
6. Commit the changes back including your signature as per the [Developer Certificate of Origin](https://github.com/euc-dev/.github/blob/main/Developer%20Certificate%20of%20Origin.md)
7. Create a PR to merge your fork changes back into main branch

## Testing

Please refer to [TESTING.md](./TESTING.md) for information on the requirements and process to test the site locally.

## /docs Folder Structure

A common folder structure has been created to allow for other repos containing product specific documentation and resources to be merged into this site using [git-submodules](https://github.blog/2016-02-01-working-with-submodules/) and [monorepo](https://backstage.github.io/mkdocs-monorepo-plugin/). This allows for those other repos to be maintained by the teams that own them.

The structure adheres to MkDocs standards, and and utilises overrides and additional assets to create a tailored site.

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

### Git-Submodule

Apart from Dev-Centre and some static index type pages, all documentation for this site is hosted within other repositories. These repositories are mounted as GitHub Submodules and an MkDocs plugin called [monorepo](https://backstage.github.io/mkdocs-monorepo-plugin/) is used to bring all of the docs together into this repo and served as a single site. See the [Git Submodule Mounts](#git-submodule-mounts) for information on the structure and repository mounts.

This means that apart from the Dev-Centre pages, most other pages come from other repos and will need to be edited within those other repos. This therefore means that the majority of changes must be committed and pulled into the other repos, then pushed to this repo. For example:

```shell
git submodule update --init --recursive
```

It is also important to note that each submodule is configured with branch set to **main** using the `git submodule set-branch --branch main "submodule-path"`.

### Initializing submodules

If you have forked this repo, or have content changes from other repos included as Submodules, you will need to initialize the GitHub Submodules:

```shell
git checkout . . .
cd euc-dev.github.io/
git submodule update --init --recursive
git submodule update --recursive --remote
code .
```

### Git-Submodule Mounts

The diagram below describes the folders within the repo that are submodules and where their respective remote origins are mounted:

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
    This means, you must run the following commands before committing any code and pulling:

    ```bash
    git submodule update --init --recursive
    git submodule update --recursive --remote
    ```

## License

This project is licensed under the Creative Commons Attribution 4.0 International as described in [LICENSE](https://github.com/euc-dev/.github/blob/main/LICENSE); you may not use this file except in compliance with the License.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
