---
layout: page
title: Workspace ONE Developer Centre
hide:
  - navigation
  - toc
---

## Securely Integrate Your Mobile Apps with Omnissa Workspace ONE

<div class="grid cards" markdown>

- <figure markdown="span">
    ![](../../assets/images/dev-centre-learn.png)
    <caption>LEARN</caption>
    </figure>
  
    <p style="text-align: center;"> Learn what you can do with the core capabilities provided by the Workspace ONE platform. </p>

    <p style="text-align: center;"> [Learn About Core Capabilities][core]</p>

- <figure markdown="span">
    ![](../../assets/images/dev-centre-code.png)
    <caption>CODE</caption>
    </figure>
  
    <p style="text-align: center;"> Get APIs, SDKs, docs, code samples, and other developer resources for Workspace ONE. </p>

    <p style="text-align: center;"> [Browse Developer Resources][developer] </p>

- <figure markdown="span">
    ![](../../assets/images/dev-centre-connect.png)
    <caption>CONNECT</caption>
    </figure>
  
    <p style="text-align: center;"> Connect with Omnissa experts the Workspace ONE developer community. </p>

    <p style="text-align: center;"> [Community Resources][community] </p>

</div>

## Core Capabilities

::cards:: cols=4

- title: App Passcode
  content: For security reasons, enterprises may want to prevent continuous access to an app without periodic authentication. An app passcode can ensure the app is only accessible to the entitled user and that the user identity is maintained over...
  url: ./core-capabilities.md#app-passcode
  image: ../../assets/logos/passkey-fill.svg

- title: App Tunneling
  content: An application may require access to web services residing behind a corporate firewall. A traditional full device VPN solution is not adequate due to manual steps required to enable the VPN on the device, and the security exposure by...
  url: ./core-capabilities.md#app-tunneling
  image: ../../assets/logos/uag-logo.png

- title: Prevent Copy and Paste
  content: For apps used in more regulated industries, it may be important for IT to prevent applications from openly sharing data with each other. Copy / Paste restrictions can prevent data in a corporate app from being easily transferred to...
  url: ./core-capabilities.md#prevent-copy-and-paste
  image: ../../assets/logos/paste-regular.svg

- title: Single Sign On Certificate Authentication
  content: For security reasons, enterprises may require authentication for their API endpoints and websites, SSO via Certificates allows a developer to leverage enrollment credentials to handle the authentication without prompting the end user of the...
  url: ./core-capabilities.md#single-sign-on-certificate-authentication
  image: ../../assets/logos/certificate-diploma-svgrepo-com.svg

::/cards::

Browse all [Core Capabilities](core-capabilities.md)

---

## Technical Capabilities

### Find the Right Technical Approach for Integrating Your App With Workspace ONE

There are multiple technical approaches you can use to securely integrate apps with Workspace ONE. Most commonly, developers use a combination of technical approaches to meet the desired outcome based on whether they are creating Android, iOS, or web-native apps.

<div class="grid" markdown>

=== "Identity Manager"
    The Identity Manager component of Workspace ONE acts as a user store, a user catalog and Single Sign On (SSO) hub for your organization. Identity Manager’s APIs shorten app development time by providing consumable authentication and SSO capabilities. The REST APIs also allow your app to manage various objects within your organization: applications, entitlements, users and groups. <table width: 100%>  <thead>  <tr>  <th>Development Effort</th>  <th>Supported App Types</th>  </tr>  </thead>  <tr>  <td><span style="color:orange">**Medium**</span></td>  <td><span style="color:red">:material-lock-open-variant:</span>    <span style="color:green">:material-lock:</span></td>  </tr>  <tr>  <td>**Primary Use Case:**&ensp; Giving end users easy authentication into your application</td>  <td>**Deployment:** &ensp; :simple-apple:  :simple-android:  :simple-windows:  :simple-macos:</td>  </tr>  </table>

=== "App Wrapping"
    App Wrapping identifies specific app functions and replaces them with calls to the AirWatch SDK. This allows for a subset of AirWatch SDK capabilities to be added to an app without requiring any developer involvement. App Wrapping is only compatible with internal apps using approved development platforms, coding practices and libraries. <table width: 100%>  <thead>  <tr>  <th>Development Effort</th>  <th>Supported App Types</th>  </tr>  </thead>  <tr>  <td><span style="color:orange">**Medium**</span></td>  <td><span style="color:red">:material-lock-open-variant:</span>    <span style="color:green">:material-lock:</span></td>  </tr>  <tr>  <td>**Primary Use Case:** &ensp; Provides a subset of SDK functionality. Only recommended for tactical deployments</td>  <td>**Deployment:**  &ensp; :simple-apple:  :simple-android:  :simple-windows:  :simple-macos: <br>**Note:** Not compatible with Android for Work enrolled devices.</td>  </tr>  </table>

=== "AppConfig.org"
    The AppConfig Community is a collection of industry-leading EMM solution providers and app developers that are making it simpler for developers to use native platform APIs to configure and secure apps in the enterprise. <table width: 100%>  <thead>  <tr>  <th>Development Effort</th>  <th>Supported App Types</th>  </tr>  </thead>  <tr>  <td><span style="color:green">**Low**</span></td>  <td><span style="color:red">:material-lock-open-variant:</span>    <span style="color:green">:material-lock:</span></td>  </tr>  <tr>  <td>**Primary Use Case:**  &ensp; An open and native approach ideal for most common use cases></td>  <td>**Deployment:**  &ensp; :simple-apple:  :simple-android:  :simple-windows:  :simple-macos: <br>**Note:** Android for Work enrolled devices only.</td>  </tr>  </table>

=== "AirWatch SDK"
    The SDK code library from AirWatch can be used to enable additional app config and security capabilities that may not yet be available natively as part of the AppConfig Community. Certain use cases such as granular analytics can be provided through a deeper integration with the SDK. 
    <table width: 100%>  <thead>  <tr>  <th>Development Effort</th>  <th>Supported App Types</th>  </tr>  </thead>  <tr>  <td><span style="color:orange">**Medium**</span></td>  <td><span style="color:red">:material-lock-open-variant:</span>    <span style="color:green">:material-lock:</span></td>  </tr>  <tr>  <td>**Primary Use Case:** &ensp; Code library for use cases requiring deeper integration</td>  <td>**Deployment:** &ensp; :simple-apple:  :simple-android:  :simple-windows:  :simple-macos:</td>  </tr>  </table>

</div>
<!-- :simple-apple:  :simple-android:  :simple-windows:  :simple-macos: -->

---

## Developer Resources

| APIs & SDKs | SDK Guides |
| --- | --- |
| [Workspace ONE Access APIs](../../../apis/ws1-access-apis/index.md) | [Android Tutorials](./core-capabilities.md#) |
| [Workspace ONE UEM SDK for Android](../../../ws1-sdk-uem-android/index.md) | [Xamarin (Android) Tutorials](./core-capabilities.md#) |
| [Workspace ONE UEM SDK for iOS](../../../ws1-skd-uem-ios/index.md) | [iOS Tutorials](./core-capabilities.md#) |
|   | [Xamarin iOS Tutorials](./core-capabilities.md#) |

<!-- ::cards:: cols=3

- title: Workspace ONE Access APIs

  url: ../../../apis/ws1-access-apis/index.md
  image: ../../assets/logos/ws1-access-logo.png

- title: Workspace ONE UEM SDK for Android

  url: ../../../ws1-sdk-uem-android/index.md
  image: ../../assets/logos/ws1-uem-logo.png

- title: Workspace ONE UEM SDK for iOS

  url: ../../../ws1-skd-uem-ios/index.md
  image: ../../assets/logos/ws1-uem-logo.png

- title: Android Tutorials

  url: ./core-capabilities.md#
  image: ../../assets/logos/android_logo_circle.png

- title: Xamarin (Android) Tutorials

  url: sso-cert-auth.md
  image: ../../assets/logos/android_logo_circle.png

- title: iOS Tutorials

  url: sso-cert-auth.md
  image: ../../assets/logos/apple_logo_circle.png

- title: Xamarin (iOS) Tutorials

  url: sso-cert-auth.md
  image: ../../assets/logos/apple_logo_circle.png

::/cards:: -->

Many Code Samples are available within the [https://github.com/euc-oss/euc-samples](https://github.com/euc-oss/euc-samples) GitHub repository. An Index of all samples is provided under [Code Samples](../../samples/index.md) menu above.

## Community Resources

The AppConfig Community is an open and native approach, ideal for most common use cases.
[Visit AppConfig.org](https://appconfig.org/)  

Omnissa Customer Community Forum, is an online experience for Omnissa customers that is the go-to for learning, connecting, and receiving real-time enablement support from our team. Visit the [Workspace ONE Forum](https://community.omnissa.com/forums/forum/9-workspace-one/) to get started.

[core]: #core-capabilities
[developer]: #developer-resources
[community]: #community-resources
