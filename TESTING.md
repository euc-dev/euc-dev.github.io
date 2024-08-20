# Testing Document Changes Prior to Pull Request

This site is built on Material for MkDocs theme which provides the ability to serve a copy of the site locally to a dynamic port served by a Docker container. Some pre-requisites are required:

* Docker Desktop is installed
* Install the Dev Containers extension into VSCode or a similar plugin to your IDE of choice
* Ensure the following files / folders exist:

```bash

├── .devcontainer
│   └── devcontainer.json
├── Dockerfile
├── requirements.txt
└── scripts
    ├── 03-serve.sh

```

* Install the `Dev Containers` VSCode extension
* Run the VSCode command `Dev Container: Open Folder in Container`
* From a new terminal window, run ./scripts/03-serve.sh to run
* From the same terminal window, run the following to initialise the submodules

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

* From the `Panel` window, click on **PORTS**
* Hover over the port 80 forwarded address and click the globe icon, this will open a browser window to the site

This method allows you to make changes to your code, which will be reflected dynamically in the browser.

***Note:***

Apart from Dev-Centre and some static index type pages, all documentation for this site is hosted within other repositories. These repositories are mounted as GitHub Submodules and an MkDocs plugin called [monorepo](https://backstage.github.io/mkdocs-monorepo-plugin/) is used to bring all of the docs together into this repo and served as a single site. See the [README.md](./README.md#folder-structure-and-included-content) for information on the structure and repository mounts.

This means that apart from the Dev-Centre pages, most other pages come from other repos and will need to be edited within those other repos. This therefore means that the changes must be committed and pulled into the other repos, then pushed to this repo using the IDE Source Control tool or by running the following command from the root of this repo:

```bash
git submodule init
git submodule update --recursive
```
