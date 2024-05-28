# ws1-sdk-uem-ios

The Workspace ONE SDK (formerly known as AirWatch SDK) code library for Apple iOS devices can be used to enable additional app config and security capabilities that may not yet be available natively as part of the AppConfig Community. Certain use cases such as granular analytics can be provided through a deeper integration with the SDK. The Workspace ONE SDK for iOS is also a good choice in deployment scenarios where a MDM profile installation on the device is not possible.

This repo is provides the content for the [omnissa Developer Portal](http://developer.omnissa.com) using MkDocs published by GitHub Pages. All documentation should be created in MarkDown format with the capabilities of MkDocs and the Material theme in mind under the /docs folder. Content should be structured within the following folder structures to allow for integration of other documentation repos:
- /dev-centre
- /apis
- powerCLI
- samples
- sdks

Each product or technology would be stored within a subfolder of the above and integrated into this site at build time.

Each documentation repo should utilise the same site name in order to ensure successful integration. Additionally, a centralised branding, theme, and image assets will be integrated via the [](https://github.com/euc-dev/branding.omnissa.github.io) repo.

At present, the following repos integrate:

| Repository URL | Description or Purpose | docs Folder Target |
| ----- | ----- | ----- |
| https://github.com/euc-dev/branding.omnissa.github.io | Centralised Branding including CSS, theme and image assets | /docs/assets |
| https://github.com/euc-dev/ws1-sdk-uem-ios | Workspace ONE SDK for iOS | /docs/sdks/ws1-sdk-uem-ios |
| https://github.com/euc-dev/ws1-sdk-uem-android | Workspace ONE SDK for Android | /docs/sdks/ws1-sdk-uem-android |
| https://github.com/euc-dev/ws1-sdk-intelligence | Workspace ONE Intelligence SDK | /docs/sdks/ws1-sdk-intelligence |
| https://github.com/euc-dev/rdpvcbridge |  | /docs/sdks/rdpvcbridge |
| https://github.com/euc-dev/view-session-management |  | /docs/sdks/view-session-management |
| https://github.com/euc-dev/app-volumes-apis | App Volumes REST API Documentation | /docs/apis/app-volumes-apis |
