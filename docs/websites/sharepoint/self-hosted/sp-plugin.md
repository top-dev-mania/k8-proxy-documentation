---
title: Sharepoint Self-Hosted Plugin
sidebar_label: Plugin
---

## Overview

The Sharepoint Self-Hosted plugin allows to delegate all download and uploads activities in the SharePoint User Interface to the GlassWall Rebuild engine. This keeps the all sharepoint documents safe.

[Plugin Brochure](https://github.com/k8-proxy/gp-sharepoint-plugins/blob/main/SelfHosted/doc/SharePointCloudPlugin-v1.pdf)

## Installation Guide (Dev)

[Watch the video](../../../../static/video/docs/websites/sharepoint/self-hosted/wsp-install.mp4)

1. get the latest install and scripts by cloning the [Repo](https://github.com/k8-proxy/gp-sharepoint-plugins.git) 

### Repository
...

### Automated Setup
...

### Manual Setup
...
 
### Proxy Configuration
...

## Removing File Handler V1 Plugin

To remove the File Handler, firstly we need to identify whether the application plugin has been installed on the machine or not. To identify the installation status, Open SharePoint 2019 Management Shell and run below cmdlet.

![](../../../../static/img/docs/websites/sharepoint/self-hosted/image029.png)

_ **Get-SPSolution** _

![](../../../../static/img/docs/websites/sharepoint/self-hosted/image030.png)

If the output prompt for the FilehandlerV1.wsp, it has been installed. Else we don't have any FIlehandlerV1.wsp has not been installed.

For the removal of this plugin, download 'RemoveFileHandler.PS1' from the below git location.

[https://github.com/k8-proxy/gp-sharepoint-plugins/tree/main/SelfHosted/installer](https://github.com/k8-proxy/gp-sharepoint-plugins/tree/main/SelfHosted/installer)

Once this has been downloaded in the SharePoint machine, Open SharePoint 2019 Management Shell

![](../../../../static/img/docs/websites/sharepoint/self-hosted/image031.png)

Locate the downloaded file through SharePoint 2019 Management Shell and run below cmdlet

'_ **.\RemoveFileHandler.PS1'

![](../../../../static/img/docs/websites/sharepoint/self-hosted/image032.png)

Once, the cmdlet ran successfully. Validate the SharePoint Plugin running below cmdlet.

'_ **Get-SPSolution** _'

This time it should not prompt for the FileHandlerV1.wsp

![](../../../../static/img/docs/websites/sharepoint/self-hosted/image033.png)