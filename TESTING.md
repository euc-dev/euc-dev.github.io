# Testing Document Changes Prior to Pull Request

This site is built on MkDocs Material Theme which provides the ability to serve a copy of the site locally to a dynamic port served by a Docker container. Some pre-reqs are required:
* install the Dev Containers extension into VSCode or a similar plugin to your IDE of choice
* Docker Desktop is installed
* ensure the following files / folders exist:

```sh

  |_.devcontainer
    |_ devcontainer.json
  |_Dockerfile
  |_scripts
    |_03-serve.sh
  |_requirements.txt

```

* run the VSCode command `Dev Container: Open Folder in Container`
* from a new terminal window, run ./scripts/03-serve.sh to run
* from the `Panel` window, click on **PORTS**
* hover over the port 80 forwarded address and click the globe icon, this will open a browser window to the site

This method allows you to make changes to your code, which will be reflected dynamically in the browser.

***Note:***

Apart from Dev-Centre and some static index type pages, all documentation for this site is hosted within other repositories. These repositories are mounted as GitHub Submodules and an MkDocs plugin called [monorepo](https://backstage.github.io/mkdocs-monorepo-plugin/) is used to bring all of the docs together into this repo and served as a single site. See the [README.md](./README.md#folder-structure-and-included-content) for information on the structure and repository mounts.

This means that apart from the Dev-Centre pages, most other pages come from other repos and will need to be edited within those other repos. This therefore means that the changes must be committed and pulled into the other repos, then pushed to this repo using the IDE Source Control tool or by running the following command from the root of this repo:

`git submodule update --recursive`
