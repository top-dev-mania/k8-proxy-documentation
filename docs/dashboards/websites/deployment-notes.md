---
title: Production Websites
sidebar_label: Deployment notes
---

### Adittional information for production websites

### Updated IP reservation list for ESXi
ESXi server: 46.165.225.145 / https://esxi01.glasswall-icap.com/

Status: UP>Up, UN>Unknown, DO> Down
- 91.109.26.19/27	GW: 91.109.26.30 UP (Controller)
- 91.109.25.70/27	GW: 91.109.25.94 UN (CentosICAPAWSTestFramework)
- 91.109.25.76/27	GW: 91.109.25.94 UP (Showcase)
- 91.109.25.77/27	GW: 91.109.25.94 NA (k8s-sow)
- 91.109.25.79/27	GW: 91.109.25.94 UP (minio-server)
- 91.109.25.80/27	GW: 91.109.25.94
- 91.109.25.81/27	GW: 91.109.25.94
- 91.109.25.86/27	GW: 91.109.25.94
- 91.109.25.87/27	GW: 91.109.25.94
- 91.109.25.88/27	GW: 91.109.25.94
- 91.109.26.21/27	GW: 91.109.26.30
- 91.109.26.22/27	GW: 91.109.26.30



### SOW based ICAP servers:
- icap-client.northeurope.cloudapp.azure.com (its running in AKS on large nodes)
- icap01.glasswall-icap.com	54.155.107.189
- icap02.glasswall-icap.com	34.240.204.39
- 3.129.78.231
- 3.139.106.69
- Load balancer icap.glasswall-icap.com - 54.77.168.168
- Load balancer 3.139.22.215
- Both running on port 1344

### DNS mappings:
- gw-demo-sample-files-eu1.s3-eu-west-1.amazonaws.com.glasswall-icap.com : 54.170.84.172
- www.glasswallsolutions.com.glasswall-icap.com : 54.78.209.23
- *.gov.uk.glasswall-icap.com , assets.publishing.service.gov.uk.glasswall-icap.com , www.gov.uk.glasswall-icap.com : 51.11.8.179
- For owasp: cse.google.com.glasswall-icap.com - 34.247.160.95 and google.com.glasswall-icap.com - 34.247.160.95

### Other notes:
*Flavour A for Proxy & ICAP from Flavour E SOW v0.3 (October 28th)
