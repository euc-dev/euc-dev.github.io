---
layout: page
title: Workspace ONE Intelligence Core Capabilities
hide:
  #- navigation
  #- toc
---

Developers can integrate Workspace ONE Intelligence SDK for apps that run on the following platforms:

- Apple iOS
- Android

## Usage Tracking Overview

An app load occurs whenever a user launches the app on their device. When the user begins using an instrumented application, the library automatically records an app load event. Workspace ONE Intelligence then aggregates app loads into rolling daily and monthly active user counts (using a Workspace ONE Intelligence-generated unique identifier), and provides insight into the relative usage of the application’s released versions. For example, you can see the number of app loads per version of your app, or the percentage of app loads that resulted in a crash (crash percentage).

## Crash Reporting Overview

A crash is a run-time exception that occurs due to some unexpected event that terminates the user session. Crashes are events that are not handled within a try/catch block in the app. The Crash Reporting page of the portal shows the event, alongside additional metrics to help with root cause analysis and debugging. Crashes are grouped together to make it easier to identify the most frequent crashes. Workspace ONE Intelligence provides the information necessary to reproduce the issue in local development / testing. Tracking exceptions allows developers to:

- Identify potential hotspots where errors might occur.
- Analyze exceptions by viewing the stacktrace, diagnostics, metadata, and breadcrumbs related to that issue.
- Prioritize and resolve bugs to reduce or eliminate errors and crashes.

## User Flows Monitoring Overview

User flows allows developers to track key interactions or user flows in their app such as login, account registration, and in app purchase. By default, the SDK will automatically track application load time as a user flow. You can specify additional user flows by adding a few more lines of code to your application.

A user flow failure rate can be monitored in the Workspace ONE Intelligence portal. Each failed user flow comes with a slew of diagnostics that allow developers to debug why a particular user flow is failing.

### Data Reported with User Flows

The following information is reported with each user flow:

- User flow group name (eg. “user login”)
- Completion state: success and failure (crashed, timed out or declared failure)
  - On Android, a failure reason can be included as a string. It will appear in the ‘user_flow_failure_reason’ column in the Workspace ONE Intelligence platform
- Start time
- Stop time Active time (the time the user flow was running in the foreground)
- Diagnostics which include app version, operating system, device Model, carrier, and more.

### User Flows Final States

Each user flow may stop in one of a few possible final states:

- Success. A success state is reached through the end userflow API. Success can be used to denote that a user flow’s goal was accomplished. Calling the end userflow API is required to finish a user flow in a success state.
- Cancelled. A cancelled state is reached through the cancel userflow API of Workspace ONE Intelligence SDK. An unfinished user flow that is cancelled is removed and will not be reported to Workspace ONE Intelligence. Hence, cancelled user flows are ignored.
- Failed states:
  - Declared failures. A declared failure state is reached by calling the fail user flow API of Workspace ONE Intelligence SDK. Declared failure states can be used to denote that a user flow’s goal was not accomplished. Example: If a user does not allow your photo-sharing app to access the phone’s camera during onboarding, you may wish to declare the onboarding user flow you’ve defined as failed.
  - Crashed. A crashed state occurs only if the app crashes while the user flow is in progress. During a crash, Workspace ONE Intelligence SDK automatically marks all started user flows as crashed, and reports the user flows to Workspace ONE Intelligence. On the Workspace ONE Intelligence platform, users may view which crashes impacted a user flow.
  - Timed Out. A timed out state is reached when a user flow has remained started longer than a specified period of time. The timed out user flow is stopped and sent to Workspace ONE Intelligence. Timeout periods for user flows can be adjusted in the Workspace ONE Intelligence platform.

!!!Note
    If a developer does not specify success, failure, or cancelled state in code, then the only possible remaining final states a user flow can reach are crashed and timed out.
  
    Once a user flow has stopped in a final state, the state can no longer be changed. In particular, user flows are not marked as crashed if they had already been marked success or failed before the app crashed.

### User Flows Traces

Every non-successful user flow (failed, crashed, or timed out) is reported with a log of events that occurred while the user flow was in progress. User flows traces can be used by developers to diagnose why a user flow is failing. The events collected include [Breadcrumbs](#breadcrumbs-overview) left by the developer, networking calls captured by [Network Insights](#network-insights-overview), and important system events that may have impacted the user flow. The following system breadcrumbs are captured automatically by Workspace ONE Intelligence SDK:

- Network connectivity gained / lost
- Network connection type changes (eg. wireless to wifi)
- App backgrounds
- App foregrounds

## Mobile Device Telemetry

You can opt-in for the Mobile Device Telemetry feature by enabling the ‘DEX Telemetry Flag’ when you install version 24.1.0 or later of IntelligenceSDK.

!!!Note
    Due to the increase in data consumption being more than anticipated, we have deactivated the feature to calculate network upload and download speeds in version 24.3.0

With the release of version 24.1.0 of the Intelligence SDK, as part of the new ‘Mobile telemetry’, we have introduced new attributes for calculating network upload and download speeds. These changes may result in increased data usage compared to previous versions.

If you notice a significant increase in data consumption after updating to version 24.1.0, it could be attributed to these new attributes. Our team is actively working on a solution to optimize data usage, which will be included in the next release.

If you believe that this increase in data consumption is affecting your device fleet, please do not hesitate to reach out to us. For any questions or concerns, please contact [gouthami.boinpally@broadcom.com](mailto:gouthami.boinpally@broadcom.com) or [nick.brouillette@broadcom.com](mailto:nick.brouillette@broadcom.com) for further assistance.

We thank you for your understanding.

## Handled Exceptions

Handled exceptions are anticipated errors that developers can log by calling an API of Workspace ONE Intelligence SDK. For example, a handled exception can be a run-time exception that gets handled within a try / catch block and logged with Workspace ONE Intelligence SDK. The Workspace ONE Intelligence platform displays handled exception metrics to help developers with root cause analysis and debugging.

## Breadcrumbs Overview

A breadcrumb is a developer-defined text string that is analogous to a log message. Developers insert breadcrumbs to capture app run-time information, such as variable values, app states, progress through the code, user actions, time performance for user experience, and to flag events within callbacks (such as low memory warnings). Each breadcrumb can contain up to 140 characters.

To leave a breadcrumb, developers simply insert an API call (after initializing Workspace ONE Intelligence SDK) at a point of interest in the code. Developers can also attach breadcrumbs to crashes and handled exceptions (both of which always have stacktraces) in order to:

- Identify and analyze session events/state/variables to capture for debugging.
- Use this information, along with stack traces, diagnostics, and metadata, to determine the root cause of the issue.

Developers use breadcrumbs to supplement IDE debugging, allowing them to capture useful information about app behavior once the apps have been distributed to a larger user audience.

For each session, Workspace ONE Intelligence SDK automatically stores a session_start breadcrumb to mark the beginning of a user session, and the most recent 99 breadcrumbs that were left before a crash.

## Automatic Breadcrumbs Overview

Automatic breadcrumbs allow developers to get additional information about the steps users have taken or key events that happen in the apps without requiring additional code changes. Events that trigger these breadcrumbs are stored by our SDK and displayed in our platform alongside developer-defined breadcrumbs, allowing you to trace back through the last steps users took or key events in your app before an error occurred. These breadcrumbs help you reproduce issues more easily and contain valuable diagnostics information.

Here are the different events that are stored as automatic breadcrumbs:

- Handled Exceptions​​
- App Background/Foreground
  - “App foregrounded” - for UIApplicationDidBecomeActiveNotification events
  - “App backgrounded” - for UIApplicationWillResignActiveNotification events
- App termination
  - “Application terminated” - for UIApplicationWillTerminateNotification event
- Network Breadcrumbs
  - URL
  - Request type
  - Latency
  - HTTP Status
  - Bytes in/Bytes out
- Network Connectivity Changes
  - “Internet connection UP”
  - “Internet connection DOWN”
  - “XX (Connectivity State) connectivity gained”
  - “Switching from XX (Connectivity State) to XX (Connectivity State)”
  - Android connectivity states are: unknown, disconnected, 2G, 3G, EDGE, GPRS, LTE, Wifi
  - Apple connectivity states are limited to: Wifi, cellular
- UIView Loads (and View Names)
  - (Name of the View) loaded
  - (Name of the View) unloaded
- App Launched
  - “Session Start”

## User Name Overview

Developers can associate a user name with each event in order to help differentiate users on both the WS1 Intelligence Platform and the client.

This capability allows customer support staff:

- to search by user name to determine how many crashes a given user has experienced, and
- to view a list of users who experienced a crash or handled exception.
- to search the users for app loads, user flows and network insights features with custom dashboards.

Tracking user names, in combination with stack traces and diagnostics, enables support staff to better correlate data, priorities issues, and respond to support tickets.

!!!Note
    Workspace ONE Intelligence takes user privacy very seriously. If we detect an app sending Device Identifiers or other personally identifying information (PII) that does not help with debugging a crash, we will ask the app developer to remove the gathering of this information through our service.

## Network Insights Overview

Whenever an app makes a network call, Workspace ONE Intelligence SDK monitors and captures the following information:

- service name
- device type
- device OS and OS version
- app version
- location information, if given by the app

!!!Note
    Location information allows visibility into a user’s geographic location, which can help with quantifying the number of app users within a geographic region, or with contextualizing a certain issue based on location (e.g. outages). Workspace ONE Intelligence SDK does not collect location information for itself. Instead, the SDK provides an API for the app to use to send latitude & longitude coordinates for the device, if it chooses.

- endpoint URI

For HTTP calls (such as REST apps), Workspace ONE Intelligence SDK monitors and captures the following information:

- HTTP URL
- HTTP status codes to help determine whether a call succeeded or failed
- latency (elapsed time between request and response received)
- amount of data received in the response

## Symbolication Overview

Symbolication is the process of translating stack traces into a human-readable form by mapping hexadecimal addresses to function names using symbol file(s). Workspace ONE Intelligence automatically symbolicates crashes once you have uploaded your app’s symbol file(s).

- For Apple applications, stack traces are reported in hexidecimal characters. Symbolication allows developers to convert these hex strings into human-readable text.
- For Android applications that use the ProGuard tool to obfuscate their function names, developers can use a Proguard mapping file to replace the obfuscated name with a human-readable name. For more information, see [Configuring Proguard Symbolication]().

## Opt In or Out of Workspace ONE Intelligence

Certain app users might want to opt in to DEX telemetry or opt out of 
Workspace ONE Intelligence logging and tracking. 

Admins may want to set different configuration default settings 
than the defaults provided by Workspace ONE Intelligence SDK. 

Workspace ONE Intelligence SDK provides an API that can enable 
or disable reporting for the Workspace ONE Intelligence features and 
can enable or disable reporting for the DEX feature. 
Each feature can be controlled individually. 

If user choice is desired, developers must implement the code that prompts 
the app user to select whether to opt in or opt out. 

If admin choice is desired, developers must implement the code that reads the desired 
configuration and selects the appropriate opt in or opt out settings. 

(Your app may choose to allow end users to override the admin's default settings or not.)

If a user has opted out, or an app configuration has opted out, 
their instance of the app will not report any activity back 
to Workspace ONE Intelligence or DEX. 

## Related Resources

[Download Sample Code](https://storage.googleapis.com/ace-static/appdevsite/iOS/ios-native-sdk-tunneling.zip)
