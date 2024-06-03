---
layout: page
title: Workspace ONE Developer Centre
#permalink: /dev-centre/
hide:
  - navigation
  - toc
---

## Securely Integrate Your Mobile Apps with VMware Workspace ONE

<div class="grid cards" markdown>

- <figure markdown="span">
    ![](/assets/images/dev-centre-learn.png)
    <caption>LEARN</caption>
    </figure>
  
    Learn what you can do with the core capabilities provided by the Workspace ONE platform.

    [Learn About Core Capabilities](#core-capabilities)  

- <figure markdown="span">
    ![](/assets/images/dev-centre-code.png)
    <caption>CODE</caption>
    </figure>
  
    Get APIs, SDKs, docs, code samples, and other developer resources for Workspace ONE.

    [Browse Developer Resources](#developer-resources)  

- <figure markdown="span">
    ![](/assets/images/dev-centre-connect.png)
    <caption>CONNECT</caption>
    </figure>
  
    Connect with VMware experts the Workspace ONE developer community.

    [Community Resources](#community-resources)

</div>

## Core Capabilities

<div class="grid cards" markdown>

- **[App Passcode](https://developer.omnissa.com/ws1-dev-centre/core-capabilities/App-Passcode)**

    ---

    For security reasons, enterprises may want to prevent continuous access to an app without periodic authentication.  
    An app passcode can ensure the app is only accessible to the entitled user and that the user identity is maintained over...

- **[App Tunneling](https://developer.omnissa.com/ws1-dev-centre/core-capabilities/App-Tunneling)**

    ---

    An application may require access to web services residing behind a corporate firewall.

    A traditional full device VPN solution is not adequate due to manual steps required to enable the VPN on the device, and the security exposure by...

- **[Prevent Copy and Paste](https://developer.omnissa.com/ws1-dev-centre/core-capabilities/Prevent-Copy-and-Paste)**

    ---

    For apps used in more regulated industries, it may be important for IT to prevent applications from openly sharing data with each other.

    Copy / Paste restrictions can prevent data in a corporate app from being easily transferred to...

- **[Single Sign On Certificate Authentication](https://developer.omnissa.com/ws1-dev-centre/core-capabilities/Single-Sign-On-Certificate-Authentication)**

    ---

    For security reasons, enterprises may require authentication for their API endpoints and websites, SSO via Certificates allows a developer to leverage enrollment credentials to handle the authentication without prompting the end user of the...

</div>

Browse all [core capabilities](core-capabilities.md)

---

## Technical Capabilities
**Find the Right Technical Approach for Integrating Your App With Workspace ONE**

There are multiple technical approaches you can use to securely integrate apps with Workspace ONE. Most commonly, developers use a combination of technical approaches to meet the desired outcome based on whether they are creating Android, iOS, or web-native apps.

<div class="grid" markdown>

=== "Identity Manager"
    The Identity Manager component of Workspace ONE acts as a user store, a user catalog and Single Sign On (SSO) hub for your organization. Identity Manager’s APIs shorten app development time by providing consumable authentication and SSO capabilities. The REST APIs also allow your app to manage various objects within your organization: applications, entitlements, users and groups. <table>  <thead>  <tr>  <th>Development Effort</th>  <th>Supported App Types</th>  </tr>  </thead>  <tr>  <td>Medium</td>  <td>No Idea</td>  </tr>  <tr>  <td>Primary Use Case:Code library for use cases requiring deeper integration</td>  <td>Deployment: Any</td>  </tr>  </table>

=== "App Wrapping"
    App Wrapping identifies specific app functions and replaces them with calls to the AirWatch SDK. This allows for a subset of AirWatch SDK capabilities to be added to an app without requiring any developer involvement. App Wrapping is only compatible with internal apps using approved development platforms, coding practices and libraries. <table>  <thead>  <tr>  <th>Development Effort</th>  <th>Supported App Types</th>  </tr>  </thead>  <tr>  <td>Medium</td>  <td>No Idea</td>  </tr>  <tr>  <td>Primary Use Case:Code library for use cases requiring deeper integration</td>  <td>Deployment: Any</td>  </tr>  </table>

=== "AppConfig.org"
    The AppConfig Community is a collection of industry-leading EMM solution providers and app developers that are making it simpler for developers to use native platform APIs to configure and secure apps in the enterprise. <table>  <thead>  <tr>  <th>Development Effort</th>  <th>Supported App Types</th>  </tr>  </thead>  <tr>  <td>Medium</td>  <td>No Idea</td>  </tr>  <tr>  <td>Primary Use Case:Code library for use cases requiring deeper integration</td>  <td>Deployment: Any</td>  </tr>  </table>

=== "AirWatch SDK"
    The SDK code library from AirWatch can be used to enable additional app config and security capabilities that may not yet be available natively as part of the AppConfig Community. Certain use cases such as granular analytics can be provided through a deeper integration with the SDK. <table>  <thead>  <tr>  <th>Development Effort</th>  <th>Supported App Types</th>  </tr>  </thead>  <tr>  <td>Medium</td>  <td>No Idea</td>  </tr>  <tr>  <td>Primary Use Case:Code library for use cases requiring deeper integration</td>  <td>Deployment: Any</td>  </tr>  </table>

</div>

---

## Developer Resources

 APIs & SDKs | Guides & Tutorials  
 --- | ---
  [Workspace ONE Access APIs]() | [iOS Tutorials]()
  [Workspace ONE UEM SDK for Android]() | [Android Tutorials]()
  [Workspace ONE UEM SDK for iOS]() | [Xamarin (iOS) Tutorials]()
    | [Xamarin (Android) Tutorials]()

Many Code Samples are available within the [https://github.com/euc-oss/euc-samples](https://github.com/euc-oss/euc-samples) GitHub repository. An Index of all samples is provided under [Code Samples](../samples/index.md) menu above.

## Community Resources

The AppConfig Community is an open and native approach, ideal for most common use cases.
[Visit AppConfig.org](https://appconfig.org/)  

![](/assets/logos/ws1-family.png)
Omnissa Customer Community Forum, is an online experience for Omnissa customers that is the go-to for learning, connecting, and receiving real-time enablement support from our team. Visit the [Workspace ONE Forum](https://community.omnissa.com/forums/forum/9-workspace-one/) to get started.

