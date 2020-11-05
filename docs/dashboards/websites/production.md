---
title: Production Websites
sidebar_label: Production
---

| Website  | Outcome URL | IP | Flavor | Ports opened | Status | Repo | OS | Infrastructure | Provisioning | Container engine | Doc | Team |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| GW Engineering  | https://engineering.glasswallsolutions.com.glasswall-icap.com | 54.170.84.172 | B: Docker v0.1  |  443 | Live in testing |[GW engineering](https://github.com/k8-proxy/gp-engineering-website)|||
| GW Website      | https://glasswallsolutions.com.glasswall-icap.com             | 54.78.209.23  |A: K8s v0.1      | 443  | Live in testing |[Glasswall Solutions](https://github.com/k8-proxy/gp-glasswallsolutions-website)|||
| dataport.emma.msrb.org |https://dataport.emma.msrb.org.glasswall-icap.com/Home/Index and https://emma.msrb.org.glasswall-icap.com/|3.120.30.57|E: SOW v0.2|443|Live in testing|[Emma port](https://github.com/k8-proxy/gp-emma-dataport-website)|||
| UK Zones  | https://uk.zones.com.glasswall-icap.com | 54.78.104.24 |B: Docker v0.1| 443 | Live in testing |[UK zones](https://github.com/k8-proxy/gp-uk-zones-com)|
| owasp.org |https://owasp.org.glasswall-icap.com/|34.247.160.95|SOW v0.2|443|Live in testing|[OWASP](https://github.com/k8-proxy/gp-owasp-website)|
| Xamarines sharepoint   |https://www.nekoffice.com.glasswall-icap.com/sites/gwtest/SitePages/Home.aspx | 54.169.155.88|A: K8s v0.1||Live in testing|[Xamarines sharepoint](https://github.com/k8-proxy/gp-sharepoint/issues)|
| fortinet.com|https://www.fortinet.com.glasswall-icap.com/|35.178.179.131|ICAP deployed||Live in testing|[Fortinet](https://github.com/k8-proxy/gp-fortinet-website)|
| miniIO|https://min.io.glasswall-icap.com/||ICAP deployed||Live in testing|[MiniIO](https://github.com/k8-proxy/gp-v02-miniio)|
| Atlasian |https://os-summit.atlassian.net.glasswall-icap.com/browse/TASK-145|3.139.5.226|SOW v0.2||Live in testing|[JIRA](https://github.com/k8-proxy/gp-jira-website)|||



### SOW based ICAP servers:
- icap01.glasswall-icap.com	54.155.107.189
- icap02.glasswall-icap.com	34.240.204.39
- Load balancer icap.glasswall-icap.com
- Both running on port 1344

### DNS mappings:
- gw-demo-sample-files-eu1.s3-eu-west-1.amazonaws.com.glasswall-icap.com : 54.170.84.172
- www.glasswallsolutions.com.glasswall-icap.com : 54.78.209.23
- *.gov.uk.glasswall-icap.com , assets.publishing.service.gov.uk.glasswall-icap.com , www.gov.uk.glasswall-icap.com : 51.11.8.179

### Other notes:
*Flavour A for Proxy & ICAP from Flavour E SOW v0.3 (October 28th)




