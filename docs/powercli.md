---
layout: default
title: PowerCLI
permalink: /powercli/
---


Provides cmdlets for automating VMware Horizon features.

## Step 1: Connect to Environment 

To setup a connection you should use the `Connect-HVServer` command. Run the code sample below to connect.
```
# Connects to the Horizon API service that runs on an instance of a Horizon Connection server by using the User, Password, and Domain parameters.
Connect-HVServer -Server server -User username -Password pass -Domain domain
```
blah