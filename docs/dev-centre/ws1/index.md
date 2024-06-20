---
layout: page
title: Workspace ONE Developer Centre
hide:
  - navigation
  - toc
---

## Securely Integrate Your Mobile Apps with VMware Workspace ONE

<div class="grid cards" markdown>

- <figure markdown="span">
    ![](../../assets/images/dev-centre-learn.png)
    <caption>LEARN</caption>
    </figure>
  
    Learn what you can do with the core capabilities provided by the Workspace ONE platform.

    [Learn About Core Capabilities][core]

- <figure markdown="span">
    ![](../../assets/images/dev-centre-code.png)
    <caption>CODE</caption>
    </figure>
  
    Get APIs, SDKs, docs, code samples, and other developer resources for Workspace ONE.

    [Browse Developer Resources][developer]

- <figure markdown="span">
    ![](../../assets/images/dev-centre-connect.png)
    <caption>CONNECT</caption>
    </figure>
  
    Connect with VMware experts the Workspace ONE developer community.

    [Community Resources][community]

</div>

## Core Capabilities

<!-- [cards cols=2 (docs/dev-centre/ws1/core-capabilities-doc-ref.yaml)] -->

::cards::

- title: App Passcode
  content: For security reasons, enterprises may want to prevent continuous access to an app without periodic authentication. An app passcode can ensure the app is only accessible to the entitled user and that the user identity is maintained over...
  url: .#app-passcode.md
  image: ../../assets/logos/passkey-fill.svg

- title: App Tunneling
  content: An application may require access to web services residing behind a corporate firewall. A traditional full device VPN solution is not adequate due to manual steps required to enable the VPN on the device, and the security exposure by...
  url: app-tunneling.md
  image: ../../assets/logos/uag-logo.png

- title: Prevent Copy and Paste
  content: For apps used in more regulated industries, it may be important for IT to prevent applications from openly sharing data with each other. Copy / Paste restrictions can prevent data in a corporate app from being easily transferred to...
  url: prevent-copy-and-paste.md
  image: ../../assets/logos/paste-regular.svg

- title: Single Sign On Certificate Authentication
  content: For security reasons, enterprises may require authentication for their API endpoints and websites, SSO via Certificates allows a developer to leverage enrollment credentials to handle the authentication without prompting the end user of the...
  url: sso-cert-auth.md
  image: ../../assets/logos/certificate-diploma-svgrepo-com.svg

::/cards::

<!-- <div class="grid cards" markdown>

- **[App Passcode](app-passcode.md)**

    ---

    For security reasons, enterprises may want to prevent continuous access to an app without periodic authentication.  
    An app passcode can ensure the app is only accessible to the entitled user and that the user identity is maintained over...

- **[App Tunneling](app-tunneling.md)**

    ---

    An application may require access to web services residing behind a corporate firewall.

    A traditional full device VPN solution is not adequate due to manual steps required to enable the VPN on the device, and the security exposure by...

- **[Prevent Copy and Paste](prevent-copy-and-paste.md)**

    ---

    For apps used in more regulated industries, it may be important for IT to prevent applications from openly sharing data with each other.

    Copy / Paste restrictions can prevent data in a corporate app from being easily transferred to...

- **[Single Sign On Certificate Authentication](sso-cert-auth.md)**

    ---

    For security reasons, enterprises may require authentication for their API endpoints and websites, SSO via Certificates allows a developer to leverage enrollment credentials to handle the authentication without prompting the end user of the...

</div> -->

Browse all [Core Capabilities](core-capabilities.md)

---

## Technical Capabilities

### Find the Right Technical Approach for Integrating Your App With Workspace ONE

There are multiple technical approaches you can use to securely integrate apps with Workspace ONE. Most commonly, developers use a combination of technical approaches to meet the desired outcome based on whether they are creating Android, iOS, or web-native apps.

<div class="grid" markdown>

=== "Identity Manager"
    The Identity Manager component of Workspace ONE acts as a user store, a user catalog and Single Sign On (SSO) hub for your organization. Identity Manager’s APIs shorten app development time by providing consumable authentication and SSO capabilities. The REST APIs also allow your app to manage various objects within your organization: applications, entitlements, users and groups. <table>  <thead>  <tr>  <th>Development Effort</th>  <th>Supported App Types</th>  </tr>  </thead>  <tr>  <td>Medium</td>  <td>Public, Private</td>  </tr>  <tr>  <td>Primary Use Case:<br>Giving end users easy authentication into your application</td>  <td>Deployment:<br>Any</td>  </tr>  </table>

=== "App Wrapping"
    App Wrapping identifies specific app functions and replaces them with calls to the AirWatch SDK. This allows for a subset of AirWatch SDK capabilities to be added to an app without requiring any developer involvement. App Wrapping is only compatible with internal apps using approved development platforms, coding practices and libraries. <table>  <thead>  <tr>  <th>Development Effort</th>  <th>Supported App Types</th>  </tr>  </thead>  <tr>  <td>Medium</td>  <td>Public, Private</td>  </tr>  <tr>  <td>Primary Use Case:<br>Provides a subset of SDK functionality. Only recommended for tactical deployments</td>  <td>Deployment:<br>Most (not compatible with Android for Work devices)</td>  </tr>  </table>

=== "AppConfig.org"
    The AppConfig Community is a collection of industry-leading EMM solution providers and app developers that are making it simpler for developers to use native platform APIs to configure and secure apps in the enterprise. <table>  <thead>  <tr>  <th>Development Effort</th>  <th>Supported App Types</th>  </tr>  </thead>  <tr>  <td>Low</td>  <td>Public, Private</td>  </tr>  <tr>  <td>Primary Use Case:<br>An open and native approach ideal for most common use cases></td>  <td>Deployment:<br> iOS, MDM, and Android for Work* enrolled devices only.</td>  </tr>  </table>

=== "AirWatch SDK"
    The SDK code library from AirWatch can be used to enable additional app config and security capabilities that may not yet be available natively as part of the AppConfig Community. Certain use cases such as granular analytics can be provided through a deeper integration with the SDK. <table>  <thead>  <tr>  <th>Development Effort</th>  <th>Supported App Types</th>  </tr>  </thead>  <tr>  <td>Medium</td>  <td>Public, Private</td>  </tr>  <tr>  <td>Primary Use Case:<br>Code library for use cases requiring deeper integration</td>  <td>Deployment:<br>Any</td>  </tr>  </table>

</div>

---

## Developer Resources

 APIs & SDKs | Guides & Tutorials  
 --- | ---
  [Workspace ONE Access APIs]() | [iOS Tutorials]()
  [Workspace ONE UEM SDK for Android]() | [Android Tutorials]()
  [Workspace ONE UEM SDK for iOS]() | [Xamarin (iOS) Tutorials]()
    | [Xamarin (Android) Tutorials]()

Many Code Samples are available within the [https://github.com/euc-oss/euc-samples](https://github.com/euc-oss/euc-samples) GitHub repository. An Index of all samples is provided under [Code Samples](../../samples/index.md) menu above.

## Community Resources

The AppConfig Community is an open and native approach, ideal for most common use cases.
[Visit AppConfig.org](https://appconfig.org/)  

Omnissa Customer Community Forum, is an online experience for Omnissa customers that is the go-to for learning, connecting, and receiving real-time enablement support from our team. Visit the [Workspace ONE Forum](https://community.omnissa.com/forums/forum/9-workspace-one/) to get started.

[core]: #core-capabilities
[developer]: #developer-resources
[community]: #community-resources
