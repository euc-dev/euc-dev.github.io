---
layout: page
title: Core Capabilities
#permalink: /dev-centre/
hide:
  - navigation
  - toc
---
<!-- more -->

## App Passcode

For security reasons, enterprises may want to prevent continuous access to an app without periodic authentication.

An app passcode can ensure the app is only accessible to the entitled user and that the user identity is maintained over time. A biometric, such as TouchID, can typically be implemented as a layer above the PIN code to optimize the user experience.

## App Tunneling

An application may require access to web services residing behind a corporate firewall.

A traditional full device VPN solution is not adequate due to manual steps required to enable the VPN on the device, and the security exposure by allowing personal apps the same access to the VPN as corporate apps. A more secure, seamless, targeted solution is required to allow only certain applications restricted access to certain intranet endpoints.
appconfig | ios android
airwatch sdk | ios android
app wrapping | ios android

## Prevent Copy and Paste

For apps used in more regulated industries, it may be important for IT to prevent applications from openly sharing data with each other.

Copy / Paste restrictions can prevent data in a corporate app from being easily transferred to unmanaged or personal applications to protect against data leakage.
appconfig | ios
airwatch sdk | ios android
app wrapping | ios android

## Single Sign On Certificate Authentication
For security reasons, enterprises may require authentication for their API endpoints and websites, SSO via Certificates allows a developer to leverage enrollment credentials to handle the authentication without prompting the end user of the app. 

Integrated Authentication is an SDK feature that allows a developer to achieve Single Sign On for their app's web requests. The user's client certificates are automatically passed to an endpoint that challenges for Certificate authentication. By doing so, it is no longer necessary for the developer to manually handle the authentication for an endpoint or prompt a user for credentials.
appconfig | android
airwatch sdk | ios android
app wrapping | ios

## Users and Groups Management

The Identity Manager component of Workspace ONE acts as a user store for your organization. Identity Manager’s APIs allow your application to create, read, update, and delete users and groups for your organization.

## Single Sign On NTLM / Basic

For security reasons, enterprises may require authentication for their API endpoints and websites, SSO Basic / NTLM allows a developer to leverage enrollment credentials to handle the authentication without prompting the end user of the app.

Integrated Authentication is an AirWatch SDK feature that allows a developer to achieve Single Sign On for their app's web requests. The user's credentials are automatically passed to an endpoint that challenges for HTTP Basic or NTLM (NT LAN Manager) authentication. By doing so, it is no longer necessary for the developer to manually handle the authentication for an endpoint or prompt a user for credentials.
airwatch sdk | ios android
app wrapping | ios android

## Prevent Screenshot

For app usage in highly regulated industries, it may be important for IT to prevent applications from openly sharing data with each other. With the Prevent Screenshot capability, apps and devices containing sensitive content can be restricted from taking screenshots in order to discourage easy transfer of app content.

## Prevent App Backup

Device users may want to backup their device data to later restore the data on a different or new device for various reasons.

IT may need to protect the data in the corporate set of apps from being backed up so company data cannot be transferred to a new unmanaged device or backup service.
appconfig | ios android
[Supported Approaches](appconfig.md)

## Encryption

For apps with sensitive data or files, you may want to encrypt the persisted contents of the app in case the file system is compromised.

Extraction of the persistent storage will only expose encryption ciphertext as opposed to the readable data.
appconfig | ios android
airwatch sdk | android
app wrapping | android

## Managed Open In

For apps that are used in heavily regulated industries, it may be important for IT to prevent applications from openly sharing data with each other. Apps containing sensitive files can be controlled to only share files across managed corporate applications to prevent private information from leaking into unmanaged apps.
appconfig | ios android
airwatch sdk | ios android

## App Configuration

An app may require seed information for initial configuration or updated configurations throughout the course of its lifecycle.

For example, the backend server URL of an application can be seeded to the application during install so the app can auto-configure with minimal user input. With the Workspace ONE platform, you can create seamless setup flows by provisioning app config values such as server, port and domain, down to your app. Improve user experience by eliminating first time setup steps and dynamically change settings in your app with over the air updates.
appconfig | ios android
airwatch sdk | ios android

## Single Sign On OpenID Connect

End users want easy access to their apps and data, and organizations want to avoid the security risks and helpdesk support tickets that come from different passwords and authentication logic for different apps. You can support both groups while decreasing the time it takes to develop apps by relying on Workspace ONE for Single Sign On (SSO). When an end user visits your app, the app can redirect the user to Workspace ONE for authentication.

OpenID Connect (OIDC) SSO relies on JSON-based communication between your app and Workspace ONE. It is often the preferred SSO method of mobile developers and is also used in many new web apps. OIDC allows an end user with a browser to log into an Identity Provider (IdP) such as Workspace ONE.
Identity Manager | ios android desktop

## Single Sign On SAML

End users want easy access to their apps and data, and organizations want to avoid the security risks and helpdesk support tickets that come from different passwords and authentication logic for different apps. You can support both groups while decreasing the time it takes to develop apps by relying on Workspace ONE for Single Sign On (SSO). When an end user visits your app, the app can redirect the user to Workspace ONE for authentication.

SAML SSO provides a stable, fully-featured protocol for SSO for web apps. SAML allows an end user with a browser to log into an Identity Provider (IdP) such as Workspace ONE.
Identity Manager | ios android desktop