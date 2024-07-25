---
layout: page
title: Workspace ONE UEM Core Capabilities
hide:
  #- navigation
  - toc
---

## App Configuration

An app may require seed information for initial configuration or updated configurations throughout the course of its lifecycle.

For example, the backend server URL of an application can be seeded to the application during install so the app can auto-configure with minimal user input. With the Workspace ONE platform, you can create seamless setup flows by provisioning app config values such as server, port and domain, down to your app. Improve user experience by eliminating first time setup steps and dynamically change settings in your app with over the air updates.

| Technical Approaches | Implementation Summary | Supported Platforms |
|:--- |:--- |:---:|
| **AppConfig.org** | The recommended approach for implementing app configuration is through the use of the AppConfig Community best practices of Managed Configurations for iOS and App Restrictions for Android. Detailed technical documentation is available at AppConfig.org.<br>- Use the AppConfig Community practice of using iOS managed configs or Android app restrictions to deliver custom configuration values to your app.<br>- AirWatch will use the platform MDM protocol to deliver these configuration values to NSUserDefault or RestrictionsManager upon installation of your app.<br>- Requires enrollment in MDM.<br>- Requires iOS 7+ or Android 5.0+ with Android for Work Device. | :simple-apple:  :simple-android: |
| **Airwatch SDK** | An alternative approach to app config is through the integration of the AirWatch SDK to receive custom configurations from your AirWatch server.<br>- Integrate the AirWatch SDK into your app and configure an SDK profile with a custom payload containing your configuration values and assign it to your app.<br>- Initialize the SDK and use the appropriate method calls to retrieve the custom settings containing your configuration values.<br>- Requires coding and device entry in AirWatch system, no MDM required. | :simple-android: |

## App Passcode

For security reasons, enterprises may want to prevent continuous access to an app without periodic authentication.

An app passcode can ensure the app is only accessible to the entitled user and that the user identity is maintained over time. A biometric, such as TouchID, can typically be implemented as a layer above the PIN code to optimize the user experience.

| Technical Approaches | Implementation Summary | Supported Platforms |
|:--- |:--- |:---:|
| **Airwatch SDK** | - Integrate the AirWatch SDK for iOS and Android into your application.<br>- Configure the SDK profile policy for your application to enforce a passcode.<br>- The SDK will automatically display the “View Controllers & Activities” to secure your app with a passcode.<br>- Requires coding and device entry in AirWatch system, no MDM required. | :simple-android: |
| **AppConfig.org** | - Reference the sample code and documentation available at AppConfig.org<br>- Use the sample code as a starting point for the PIN code UI, and customize as needed<br>- Implement an app configuration in order to have the MDM server set the PIN code policy<br>- Requires device enrollment on iOS, and Android for Work on Android | :simple-apple:  :simple-android: |
| **App Wrapping** | - Develop and compile your application.<br>- Verify that the app is only using an approved MADP platform and coding techniques<br>- Run the compiled binary through the AirWatch application wrapping cloud engine.<br>- Assign a wrapping profile to your application with a passcode policy.<br>- Requires neither coding nor MDM, only device entry in AirWatch system. | :simple-android: |

## App Tunneling

An application may require access to web services residing behind a corporate firewall.

A traditional full device VPN solution is not adequate due to manual steps required to enable the VPN on the device, and the security exposure by allowing personal apps the same access to the VPN as corporate apps. A more secure, seamless, targeted solution is required to allow only certain applications restricted access to certain intranet endpoints.

| Technical Approaches | Implementation Summary | Supported Platforms |
|:--- |:--- |:---:|
| **AppConfig.org** | - Use the AppConfig practice of configuring a Per-App VPN profile through your MDM console for your application.<br>- All network traffic specific to the whitelisted applications defined in the profile will be redirected through the Tunnel proxy.<br>- Requires iOS 7+ / Android 5.0+. (Android 4.x on roadmap)<br>- Requires AirWatch Tunnel app to be present on device and the AirWatch Tunnel Server<br>- Requires enrollment into MDM.<br>- Requires no coding. | :simple-apple:  :simple-android: |
| **Airwatch SDK** | - Integrate the AirWatch SDK into your application and configure a SDK profile with Tunneling enabled and assign it to your application.<br>- Ensure the networking classes and methods used by your applications are supported in the AirWatch SDK guide.<br>- The SDK will redirect your app network traffic through a supported proxy to reach your targeted backend.<br>- Requires coding and device entry in AirWatch system, no MDM required. | :simple-apple:  :simple-android: |
| **App Wrapping** | - Develop and compile your application.<br>- Verify that the app is only using an approved MADP platform and coding techniques<br>- Run the compiled binary through the AirWatch application wrapping engine.<br>- Assign a wrapping profile to your application with a Tunnel policy. | :simple-apple:  :simple-android: |

## Encryption

For apps with sensitive data or files, you may want to encrypt the persisted contents of the app in case the file system is compromised.

Extraction of the persistent storage will only expose encryption ciphertext as opposed to the readable data.

| Technical Approaches | Implementation Summary | Supported Platforms |
|:--- |:--- |:---:|
| **AppConfig.org** | The recommended approach is to use the AppConfig Community best practices for enforcing device passcodes on iOS devices to ensure DAR encryption.On Android,apply an MDM policy to enforce encryption.<br>- For iOS, ensure a device passcode is set on the device through a MDM passcode policy. By setting a device-level passcode, the OS will encrypt all data on the device using the device PIN entry.<br>- For Android, configure an MDM policy to enforce device encryption.<br>- Requires no coding | :simple-apple:  :simple-android: |
| **Airwatch SDK** | One alternative approach for Android is to use the AirWatch SDK’s encryption read / write methods to encrypt your app data<br>- The SDK provides data IO methods that can take in a data argument and return an encrypted cipher text and vice versa.<br>- Requires coding and device entry in AirWatch system, no MDM required. | :simple-android: |
| **App Wrapping** | Another alternative approach for Android devices is to leverage AirWatch App Wrapping.<br>- Enable the encryption capability and wrap the app.<br>- Verify that the app is only using an approved MADP platform and coding techniques. | :simple-android: |

## Managed Open In

For apps that are used in heavily regulated industries, it may be important for IT to prevent applications from openly sharing data with each other. Apps containing sensitive files can be controlled to only share files across managed corporate applications to prevent private information from leaking into unmanaged apps.

| Technical Approaches | Implementation Summary | Supported Platforms |
|:--- |:--- |:---:|
| **AppConfig.org** | The recommended approach is to use the AppConfig.org community best practices to configure restrictions profiles for the device to protect sharing of files with unmanaged apps.<br>- Configure an iOS MDM or Android for Work restriction profile to restrict open-in to only occur within managed applications.<br>- Requires enrollment in MDM.<br>- Requires no coding.<br>- Requires iOS 7+ of Android 5.0+ with Android for Word device. | :simple-apple:  :simple-android: |
| **Airwatch SDK** | One alternative approach is to use the AirWatch SDK to prevent files from being shared with unmanaged apps.<br>- Integrate the AirWatch SDK into your application and configure the SDK profile with a copy/paste DLP restriction and assign it to your application.<br>- Write your open-in logic to read the SDK profile settins first to ensure the sharing is permitted before executing the open-in.<br>- Requires coding.<br>- Supports non-MDM enrollment modes. | :simple-apple:  :simple-android: |

## Prevent App Backup

Device users may want to backup their device data to later restore the data on a different or new device for various reasons.

IT may need to protect the data in the corporate set of apps from being backed up so company data cannot be transferred to a new unmanaged device or backup service.

| Technical Approaches | Implementation Summary | Supported Platforms |
|:--- |:--- |:---:|
| **AppConfig.org** | - Configure an iOS MDM Restriction Profile or Android for Work restriction profile to disable backup.<br>- Requires enrollment into MDM.<br>- Requires no coding.<br>- Requires iOS 5+ or Android SAFE 2.0+ or Android LG 2.2 | :simple-apple:  :simple-android: |

## Prevent Copy and Paste

For apps used in more regulated industries, it may be important for IT to prevent applications from openly sharing data with each other.

Copy / Paste restrictions can prevent data in a corporate app from being easily transferred to unmanaged or personal applications to protect against data leakage.

| Technical Approaches | Implementation Summary | Supported Platforms |
|:--- |:--- |:---:|
| **AppConfig.org** | For Android apps, the recommended approach is to follow AppConfig.org community best practices and utilize an Android for Work restriction profile in order to restrict copy / paste only to managed apps.<br>- Configure an Android for Work restriction profile to restrict copy and paste to only occur within managed applications.<br>- Requires enrollment into MDM.<br>- Requires no coding.<br>- Requires Android 5.0+ with Android for Work device.<br>- On iOS, the AppConfig Community documents sample code that can be used to enable this capability in the app. | :simple-apple: |
| **Airwatch SDK** | The recommended approach for iOS apps is to integrate the AirWatch SDK.<br>- Integrate the AirWatch SDK into your application and configure a SDK profile with a copy / paste DLP restriction and assign it to your application.<br>- Ensure any custom application copy / paste logic is done through native interfaces (UIPasteboard).<br>- Requires coding and device entry in AirWatch system, no MDM require. | :simple-apple:  :simple-android: |
| **App Wrapping** | An alternative approach for both Android and iOS is to use App Wrapping.<br>- Requires neither coding nor MDM, only device entry in AirWatch system.<br>- Develop and compile your application, then verify that the app is only using an approved MADP platform and coding techniques.<br>- Run the compiled binary through the AirWatch App Wrapping engine.<br>- Assign a wrapping profile to your application with a copy / paste DLP restriction. | :simple-apple:  :simple-android: |

## Prevent Screenshot

For app usage in highly regulated industries, it may be important for IT to prevent applications from openly sharing data with each other. With the Prevent Screenshot capability, apps and devices containing sensitive content can be restricted from taking screenshots in order to discourage easy transfer of app content.

| Technical Approaches | Implementation Summary | Supported Platforms |
|:--- |:--- |:---:|
| **Airwatch SDK** | Alternative approach for Android is to use the AirWatch SDK to prevent files from being shared with unmanaged applications.<br>- Integrate the AirWatch SDK into your application. Extend any UI activity you want to enforce this DLP restriction in with the SDKBaseActivity class.<br>- Configure a SDK profile with a disable screenshot DLP restriction and assign it to your application.<br>- Requires coding and device entry in AirWatch system, no MDM required. | :simple-android: |
| **AppConfig.org** | The recommended approach is to use the AppConfig Community practices to configure restrictions profiles for the device to disable screen capture. <br>- Configure an iOS MDM Restriction Profile or Android for Work restriction profile to disable screenshots.<br>- Requires enrollment into MDM.<br>- Requires iOS 9+ for iOS apps.<br>- Requires no coding. | :simple-apple:  :simple-android: |
| **App Wrapping** | Another alternative approach for Android apps is to use Application Wrapping.<br>- Requires neither coding nor MDM, only device entry in AirWatch system.<br>- Develop and compile your application, then verify that the app is only using an approved MADP platform and coding techniques.<br>- Run the compiled binary through the AirWatch App Wrapping engine.<br>- Assign a wrapping profile to your app with a prevent screenshot DLP restriction.<br>- Requires device entry in AirWatch system, no MDM required. | :simple-android: |

## Single Sign On Certificate Authentication

For security reasons, enterprises may require authentication for their API endpoints and websites, SSO via Certificates allows a developer to leverage enrollment credentials to handle the authentication without prompting the end user of the app.

Integrated Authentication is an SDK feature that allows a developer to achieve Single Sign On for their app's web requests. The user's client certificates are automatically passed to an endpoint that challenges for Certificate authentication. By doing so, it is no longer necessary for the developer to manually handle the authentication for an endpoint or prompt a user for credentials.

| Technical Approaches | Implementation Summary | Supported Platforms |
|:--- |:--- |:---:|
| **Airwatch SDK** | The recommended approach is to use the AirWatch SDK by enabling Integrated Authentication in the SDK Profile.<br>- Integrate the AirWatch SDK into your application and configure an SDK profile with Integrated Authentication configured for certificate authentication.<br>- Use the SDK provided interfaces to handle the networking authentication challenges<br>- Requires some coding. | :simple-apple:  :simple-android: |
| **AppConfig.org** | The alternative approach for Android devices is to use AppConfig.org community best practices.<br>- Configure a credentials payload in an Android for Work profile. This will send the certificate to the device’s managed keystore.<br>- Code your app to read the value stored at the “ManagedAppCertAlias” key from RestrictionsManager. This value is your certificate alias.<br>- Query the keychain using the alias you obtained for the ManagedAppCertAlias key from RestrictionsManager as the argument and retrieve the certificate to be used for authentication challenge.<br>- Requires Android 5.0+ and Android for Work device.<br>- Use this certificate to respond to any client certificate authentication challenges. | :simple-android: |
| **App Wrapping** | The alternative for iOS devices is to use App Wrapping.<br>- Requires neither coding nor MDM, only device entry in the AirWatch system.<br>- Develop and compile your app.<br>- Verify that the app is only using an approved MADP platform and coding techniques.<br>- Run the compiled binary through the AirWatch App Wrapping engine.<br>- Assign a wrapping profile to your app with Integrated Authentication configured for certificates. | :simple-apple: |

## Single Sign On NTLM / Basic

For security reasons, enterprises may require authentication for their API endpoints and websites, SSO Basic / NTLM allows a developer to leverage enrollment credentials to handle the authentication without prompting the end user of the app

Integrated Authentication is an AirWatch SDK feature that allows a developer to achieve Single Sign On for their app's web requests. The user's credentials are automatically passed to an endpoint that challenges for HTTP Basic or NTLM (NT LAN Manager) authentication. By doing so, it is no longer necessary for the developer to manually handle the authentication for an endpoint or prompt a user for credentials.

| Technical Approaches | Implementation Summary | Supported Platforms |
|:--- |:--- |:---:|
| **Airwatch SDK** | The recommended approach is to use the AirWatch SDK by enabling Integrated Authentication in the SDK Profile.<br>- Integrate the AirWatch SDK into your application and configure a SDK profile with Integrated Authentication configured.<br>- Use the SDK provided interfaces to handle the networking authentication challenges.<br>- Requires coding and device entry in AirWatch system, no MDM required. | :simple-apple:  :simple-android: |
| **App Wrapping** | The alternative approach is to use Application Wrapping.<br>- Develop and compile your application.<br>- Verify that the app is only using an approved MADP platform and coding techniques.<br>- Run the compiled binary through the AirWatch App Wrapping engine.<br>- Assign a wrapping profile to your application Integrated Authentication.<br>- Requires neither coding nor MDM, only device entry in AirWatch system. | :simple-apple:  :simple-android: |

## Single Sign On OpenID Connect

End users want easy access to their apps and data, and organizations want to avoid the security risks and helpdesk support tickets that come from different passwords and authentication logic for different apps. You can support both groups while decreasing the time it takes to develop apps by relying on Workspace ONE for Single Sign On (SSO). When an end user visits your app, the app can redirect the user to Workspace ONE for authentication.

OpenID Connect (OIDC) SSO relies on JSON-based communication between your app and Workspace ONE. It is often the preferred SSO method of mobile developers and is also used in many new web apps. OIDC allows an end user with a browser to log into an Identity Provider (IdP) such as Workspace ONE.

| Technical Approaches | Implementation Summary | Supported Platforms |
|:--- |:--- |:---:|
| **Identity Manager** | Take advantage of one of the many OIDC libraries to make implementation easier. <br>- Register your app as an OIDC client in Workspace ONE using the Identity Manager console. <br>- Use browser redirects to transfer your user to Workspace ONE for authentication. <br>- Requires some coding. <br>- Web app, native app, or other app. | :simple-apple:  :simple-android:  :simple-windows:  :simple-macos: |

## Single Sign On SAML

End users want easy access to their apps and data, and organizations want to avoid the security risks and helpdesk support tickets that come from different passwords and authentication logic for different apps. You can support both groups while decreasing the time it takes to develop apps by relying on Workspace ONE for Single Sign On (SSO). When an end user visits your app, the app can redirect the user to Workspace ONE for authentication.

SAML SSO provides a stable, fully-featured protocol for SSO for web apps. SAML allows an end user with a browser to log into an Identity Provider (IdP) such as Workspace ONE.

| Technical Approaches | Implementation Summary | Supported Platforms |
|:--- |:--- |:---:|
| **Identity Manager** | Take advantage of one of the many SAML libraries to make implementation easier. <br>- Create SAML trust between your app and Workspace ONE using the Identity Manager console. <br>- Use browser redirects to transfer your user to Workspace ONE for authentication. <br>- Requires some coding. | :simple-apple:  :simple-android:  :simple-windows:  :simple-macos: |

## Users and Groups Management

The Identity Manager component of Workspace ONE acts as a user store for your organization. Identity Manager’s APIs allow your application to create, read, update, and delete users and groups for your organization.

| Technical Approaches | Implementation Summary | Supported Platforms |
|:--- |:--- |:---:|
| **Identity Manager** | Identity Manager provides SCIM APIs to allow your application to create, read, update, and delete users and groups for your organization. | :simple-apple:  :simple-android:  :simple-windows:  :simple-macos: |
