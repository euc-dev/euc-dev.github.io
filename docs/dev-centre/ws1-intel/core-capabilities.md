---
layout: page
title: Workspace ONE Intelligence Core Capabilities
hide:
  #- navigation
  - toc
---

## Crash Reporting Overview

A crash is a run-time exception that occurs due to some unexpected event that terminates the user session. Crashes are events that are not handled within a try/catch block in the app. The Crash Reporting page of the portal shows the event, alongside additional metrics to help with root cause analysis and debugging. Crashes are grouped together to make it easier to identify the most frequent crashes. Workspace ONE Intelligence provides the information necessary to reproduce the issue in local development / testing. Tracking exceptions allows developers to:

- Identify potential hotspots where errors might occur.
- Analyze exceptions by viewing the stacktrace, diagnostics, metadata, and breadcrumbs related to that issue.
- Prioritize and resolve bugs to reduce or eliminate errors and crashes.

## Network Insights Overview

Whenever an app makes a network call, Workspace ONE Intelligence SDK monitors and captures certain information, such as the service name, device type, device OS and OS version, app version and endpoint URI.

For HTTP calls (such as REST apps), Workspace ONE Intelligence SDK monitors and captures the following information:

- HTTP URL
- HTTP status codes and status message to help determine whether a call succeeded or failed
- Response Time (elapsed time between request and response received)
- Amount of data received in the response

## Symbolication Overview

Symbolication is the process of translating stack traces into a human-readable form by mapping hexadecimal addresses to function names using symbol file(s). Workspace ONE Intelligence automatically symbolicates crashes once you have uploaded your app’s symbol file(s).

- For Apple applications, stack traces are reported in hexidecimal characters. Symbolication allows developers to convert these hex strings into human-readable text.
- For Android applications that use the ProGuard tool to obfuscate their function names, developers can use a Proguard mapping file to replace the obfuscated name with a human-readable name.

## Usage Tracking Overview

An app load occurs whenever a user launches the app on their device. When the user begins using an instrumented application, the library automatically records an app load event. Workspace ONE Intelligence then aggregates app loads into rolling daily and monthly active user counts (using a Workspace ONE Intelligence-generated unique identifier), and provides insight into the relative usage of the application’s released versions. For example, you can see the number of app loads per version of your app, or the percentage of app loads that resulted in a crash (crash percentage).
related resources

[Download Sample Code](https://storage.googleapis.com/ace-static/appdevsite/iOS/ios-native-sdk-tunneling.zip)

## User Name Overview

Developers can set user names (obfuscated) to:

- determine how many app loads, network call failures and crashes a given user has experienced
- Viewing a list of users who experienced a crash or handled exception which helps with support tickets and escalation management

Apteligent takes user privacy very seriously. If we detect an app sending Device Identifiers or other personally identifying information (PII) that does not help with debugging a crash, we will ask the app developer to remove the gathering of this information through our service.

## Handled Exceptions Overview

A handled exception is a run-time exception that gets handled within a try / catch block. Handled exceptions are anticipated errors that developers can log with a Apteligent API call. For apps with integrated Apteligent functionality, whenever a handled exception occurs, Apteligent logs it as a handled exception event.

!!!Note
    Handled exception tracking is available only on a paid subscription plan.

The Apteligent portal displays handled exception metrics to help developers with root cause analysis and debugging.

## Breadcrumbs Overview

A breadcrumb is a developer-defined text string that is analogous to a log message. Developers insert breadcrumbs to capture app run-time information, such as variable values, app states, progress through the code, user actions, time performance for user experience, and to flag events within callbacks (such as low memory warnings). Each breadcrumb can contain up to 140 characters.

!!!Note
    Breadcrumb logging is available only on a paid subscription plan.

To leave a breadcrumb, developers simply insert an API call (after Apteligent instantiation) at a point of interest in the code. Developers can also attach breadcrumbs to crashes and handled exceptions (both of which always have stacktraces) in order to:

- Identify and analyze session events/state/variables to capture for debugging.
- Use this information, along with stack traces, diagnostics, and metadata, to determine the root cause of the issue.

Developers use breadcrumbs to supplement IDE debugging, allowing them to capture useful information about app behavior once the apps have been distributed to a larger user audience. For each session, Apteligent libraries automatically store a session_start breadcrumb to mark the beginning of a user session, and the most recent 99 breadcrumbs that were left before a crash.

## User Flows Monitoring Overview

User flows allows developers to track key interactions or user flows in their app such as login, account registration, and in app purchase. By default, the SDK will automatically track application load time as a user flow. You can specify additional user flows by adding a few more lines of code to your application.

A user flow failure rate can be monitored in the Workspace ONE Intelligence portal. Each failed user flow comes with a slew of diagnostics that allow developers to debug why a particular user flow is failing. 

### Data Reported with User Flows

The following information is reported with each user flow:

- User flow group name (eg. “user login”)
- Completion state: success and failure (crashed, timed out or declared failure)
- Start time
- Stop time Active time (the time the user flow was running in the foreground)
- Diagnostics which include app version, operating system, device Model, carrier, and more.

### User Flows Final States

Each user flow may stop in one of a few possible final states:

- Success. A success state is reached through the end userflow API. Success can be used to denote that a user flow’s goal was accomplished. Calling the end userflow API is required to finish a user flow in a success state.
- Failed states:
  - Crashed. A crashed state occurs only if the app crashes while the user flow is in progress. During a crash, Apteligent automatically marks all started user flows as crashed, and reports the user flows to Apteligent. On the Apteligent portal, users may view which crashes impacted a user flow.
  - User-defined failures. A failed state that is reached through the fail user flow API. Failed can be used to denote that a user flow’s goal was not accomplished. Calling the fail user flow API is required to finish a user flow in a failed state. Example: If a user does not allow your photo-sharing app to access the phone’s camera during onboarding, you may wish to declare the onboarding user flow you’ve defined as failed Once a user flow has stopped in a final state, the state can no longer be changed.

### User Flows Traces

Every successful and non-successful user flow is reported with a log of events that occurred while the user flow was in progress. User flows traces can be used by developers to diagnose why a user flow was successful or why it's failing. The events collected include Breadcrumbs left by the developer, important system events that may have impacted the user flow. The following system breadcrumbs are captured automatically by Apteligent:

- Network connectivity gained / lost
- Network connection type changes (eg. wireless to wifi)
- App backgrounds
- App foregrounds
- Crash name and reason

## Automatic Breadcrumbs Overview

Automatic breadcrumbs allow developers to get additional information about the steps users have taken or key events that happen in the apps without requiring additional code changes. Events that trigger these breadcrumbs are stored by our SDK and displayed in our portal alongside developer-defined breadcrumbs, allowing you to trace back through the last steps users took or key events in your app before an error occurred. These breadcrumbs help you reproduce issues more easily and contain valuable diagnostics information.

Here are the different events that are stored as automatic breadcrumbs:

- Handled Exceptions​
- Crashes
- App Background/Foreground
  - “App foregrounded”
  - “App backgrounded”
- Network Connectivity Changes
  - “Internet connection UP” “Internet connection DOWN”
  - “XX (Connectivity State) connectivity gained”
  - “Switching from XX (Connectivity State) to XX (Connectivity State)”
  - Android connectivity states are:
    - unknown
    - disconnected, 
    - 2G
    - 3G, 
    - EDGE
    - GPRS
    - LTE
    - Wifi
  - Apple connectivity states are limited to:
    - Wifi
    - cellular
- UIView Loads (and View Names)
  - (Name of the View) loaded
  - (Name of the View) unloaded
  - App Launched “Session Start”

## Opt out Overview

Certain app users might want to opt out of Workspace ONE Intelligence logging and tracking. Workspace ONE Intelligence provides a static opt-out status setting that disables all app reporting to Apteligent. This feature is optional. If used, developers must implement the code that prompts the app user to select whether or not to opt out. If a user has opted out, their instance of the app will not report any activity back to Workspace ONE Intelligence.
