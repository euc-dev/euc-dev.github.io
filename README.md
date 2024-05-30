# omnissa Developer Portal

Welcome to the End User Computing developer portal proof-of-concept repository.

This repo stores the developer.omnissa.com POC site in markdown format using MkDocs with the Material theme. 

This site is using MkDocs as the site renderer, and GitHub Pages as the hoster. As such, this repo will create a publically available site at https://euc-dev.github.io. A custom domain name will be setup to point to developer.lab.net for the POC. If the POC is successful this will be changed to https://developer.omnissa.com in conjunction with decommissioning of the existing site.

Multiple repos are linked into this site by utilising a common folder structure and site_url.

## docs Folder Structure
A common folder structure has been created to allow for other repos containing product specific documentation and resources to be merged into this site. This allows for those other repos to be maintained by the teams that own the products.

### Folder Structure and Included Content
```
./docs
    /apis
      /index.md
    /assets
      /image
      /logo
      /stylesheets
    /dev-centre
      /index.md
      ...
    /powercli
      /index.md
    /samples
      /index.md
    /sdks
      /index.md
    /support
      /index.md
```

The following folders have content provided by other repos
| Folder Path | Repository URL |
| --- | ---:|
| /docs/apis | https://github.com/euc-dev/horizon-apis/docs/apis/
|  | https://github.com/euc-dev/app-volumes-apis/docs/apis/ |
|  | https://github.com/euc-dev/ws1-sdk-intelligence/docs/apis/ |
| docs/assets | https://github.com/euc-dev/branding/docs/assets/ |
| /docs/dev-centre/integration-samples | ws1-sdk-integration-samples |
| /docs/powercli | https://github.com/euc-dev/horizon-powercli/docs/powercli/ |
| /docs/samples | https://github.com/euc-dev/euc-samples/docs/samples/ |
| /docs/sdks | https://github.com/euc-dev/horizon-sdk/docs/sdks/ |
|  | https://github.com/euc-dev/ws1-sdk-uem-android/docs/sdks/ |
|  | https://github.com/euc-dev/ws1-sdk-intelligence/docs/sdks/ |
|  | https://github.com/euc-dev/ws1-sdk-uem-ios/docs/sdks/ |

!!! Note
    Because of the linkage between other repos, this site must be built after changes to the other sites.



