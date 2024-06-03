---
layout: page
title: Single Sign On Certificate Authentication
#permalink: /dev-centre/
hide:
  #- navigation
  - toc
---

  |  
  :--- | ---:
For security reasons, enterprises may require authentication for their API endpoints and websites, SSO via Certificates allows a developer to leverage enrollment credentials to handle the authentication without prompting the end user of the app.<br><br>Integrated Authentication is an SDK feature that allows a developer to achieve Single Sign On for their app's web requests. The user's client certificates are automatically passed to an endpoint that challenges for Certificate authentication. By doing so, it is no longer necessary for the developer to manually handle the authentication for an endpoint or prompt a user for credentials. | 
<!-- more -->

appconfig | android
airwatch sdk | ios android
app wrapping | ios

## Supported Approaches

## Airwatch SDK Implementation Summary

The recommended approach is to use the AirWatch SDK by enabling Integrated Authentication in the SDK Profile.

- Integrate the AirWatch SDK into your application and configure an SDK profile with Integrated Authentication configured for certificate authentication.
- Use the SDK provided interfaces to handle the networking authentication challenges
- Requires some coding.

## AppConfig.org Implementation Summary

The alternative approach for Android devices is to use AppConfig.org community best practices.

- Configure a credentials payload in an Android for Work profile. This will send the certificate to the device’s managed keystore.
- Code your app to read the value stored at the “ManagedAppCertAlias” key from RestrictionsManager. This value is your certificate alias.
- Query the keychain using the alias you obtained for the ManagedAppCertAlias key from RestrictionsManager as the argument and retrieve the certificate to be used for authentication challenge.
- Requires Android 5.0+ and Android for Work device.
- Use this certificate to respond to any client certificate authentication challenges.

## App Wrapping Implementation Summary

The alternative for iOS devices is to use App Wrapping.

- Requires neither coding nor MDM, only device entry in the AirWatch system.
- Develop and compile your app.
- Verify that the app is only using an approved MADP platform and coding techniques.
- Run the compiled binary through the AirWatch App Wrapping engine.
- Assign a wrapping profile to your app with Integrated Authentication configured for certificates.