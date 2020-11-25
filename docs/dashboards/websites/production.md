---
title: Production Websites
sidebar_label: Production
---

### Deployed websites in ESXi

| Website  | Outcome URL | Status | Flavor | Ports opened | IP | Repo |
|---|---|---|---|---|---|---|
|Glasswall solutions ||In progress|||||
|GW Engineering||In progress|||||
|OWASP||In progress|||||
|Minio server||In progress|||||
|Mastercard||In progress|||||




### Deployed websites in AWS

| Website  | Outcome URL | IP | Flavor | Ports opened | Status | Repo |
|---|---|---|---|---|---|---|
| GW Engineering  | https://engineering.glasswallsolutions.com.glasswall-icap.com | 54.170.84.172 | B: Docker v0.1  |  443 | Live AWS |[GW engineering](https://github.com/k8-proxy/gp-engineering-website)|
| GW Website      | https://glasswallsolutions.com.glasswall-icap.com             | 54.78.209.23  |A: K8s v0.1      | 443  | Live AWS |[Glasswall Solutions](https://github.com/k8-proxy/gp-glasswallsolutions-website)|
| dataport.emma.msrb.org |https://dataport.emma.msrb.org.glasswall-icap.com/Home/Index and https://emma.msrb.org.glasswall-icap.com/|3.120.30.57|E: SOW v0.2|443|Live AWS|[Emma port](https://github.com/k8-proxy/gp-emma-dataport-website)|
| UK Zones  | https://uk.zones.com.glasswall-icap.com | 54.78.104.24 |B: Docker v0.1| 443 | Live AWS |[UK zones](https://github.com/k8-proxy/gp-uk-zones-com)|
| owasp.org |https://owasp.org.glasswall-icap.com/|34.247.160.95|SOW v0.2|443|Live AWS|[OWASP](https://github.com/k8-proxy/gp-owasp-website)|
| Sharepoint Cloud   |https://xamariners.sharepoint.com/sites/GlasswallTest| |Sharepoint Cloud Plugin|| Live |[xamariners sharepoint cloud dotnetframework](https://github.com/k8-proxy/gp-sharepoint-plugins/tree/main/O365/DotNetFramework)|
| fortinet.com|https://www.fortinet.com.glasswall-icap.com/|18.156.64.216|ICAP deployed|443|Live AWS|[Fortinet](https://github.com/k8-proxy/gp-fortinet-website)|
| miniIO|https://min.io.glasswall-icap.com/|52.56.78.112|ICAP deployed|443 |Live AWS| [MiniIO](https://github.com/k8-proxy/gp-v02-miniio)|
| Atlasian |https://os-summit.atlassian.net.glasswall-icap.com/browse/TASK-145|3.139.5.226|ICAP deployed|443|Live AWS|[JIRA](https://github.com/k8-proxy/gp-jira-website)|||
| bsigroup.com/en-GB |https://www.bsigroup.com.glasswall-icap.com/|34.222.23.193|ICAP deployed|443|Live AWS| [bsigroup](https://github.com/k8-proxy/gp-bsigroup-website)|
| Mastercard|https://www.mastercard.co.uk.glasswall-icap.com/en-gb.html|18.216.36.55|ICAP deployed|443|Live AWS| [mastercard](https://github.com/k8-proxy/gp-mastercard-website)|
| Adarma|http://www.adarma.com.glasswall-icap.com/|54.244.172.39|ICAP deployed|443|Live AWSg| [adarma](https://github.com/k8-proxy/gp-adarma-website)|
| microsoft.com |https://www.microsoft.com.glasswall-icap.com/|18.157.111.73|ICAP deployed|443|Live AWS| [Microsoft](https://github.com/k8-proxy/gp-microsoft-website)|
| wordpress |gw-wordpress.com.glasswall-icap.com |3.6.237.153 | ICAP deployed|443|Live AWS| [Wordpress](https://github.com/k8-proxy/gp-wordpress-website)|




### Live websites with local DNS changes
| Website  | Outcome URL | IP | Flavor | Ports opened | Status | Repo | OS | Infrastructure | Provisioning | Container engine | Doc | Team |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Internal sharepoint |saaspoc1.sharepoint.com|3.249.61.168|||Live in testing|[Internal sharepoint](gp-b-docker-v01-sharepoint)|
| Atlasian |os-summit.atlassian.net|20.56.152.40|||Live AWS|[JIRA](https://github.com/k8-proxy/gp-jira-website)|||
| Atlasian |glasswall.atlassian.net|20.56.152.40|||Live AWS|[JIRA](https://github.com/k8-proxy/gp-jira-website)|||
| Atlasian |api.media.atlassian.net|20.56.152.40|||Live AWS|[JIRA](https://github.com/k8-proxy/gp-jira-website)|||

