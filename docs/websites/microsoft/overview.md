---
title: microsoft Overview
sidebar_label: Overview
---

see [Development Websites Dashboard for details](../../dashboards/websites/development.md)

## Reverse proxy for microsoft website

## Requirements

- **Docker**

- **Kubernetes**

- **Helm 3**

## Installation with deployed icap server
1. kubectl create namespace icap-adaptation
2. git clone https://github.com/k8-proxy/gp-microsoft-website.git
3. git clone https://github.com/k8-proxy/k8-reverse-proxy.git --recursive && cd k8-reverse-proxy/stable-src/
4. Update gwproxy.env with website details i.e ALLOWED_DOMAINS, SUBFILTER_ENV
5. Replcae nginx/full.pem ../../gp-microsoft-website/full.pem (gp-microsoft-website is cloned in step 2)
6. Build images for squid and nginx. Optionally Images can be pushed to docker repository as well.
    ```
    docker build nginx -t <docker registry>/reverse-proxy-nginx:0.0.1
    docker build squid -t <docker registry>/reverse-proxy-squid:0.0.1

7. git clone https://github.com/k8-proxy/s-k8-proxy-rebuild.git && cd s-k8-proxy-rebuild/stable-src/  

8. Update chart/values.yaml
	```
	set service.icap.enabled=false
	set service.nginx.additionalHosts 
	    - www.microsoft.com.glasswall-icap.com
	set service.nginx.url='*.microsoft.com.glasswall-icap.com'
	
9. Deploy the helm chart
	```
	helm --namespace icap-adaptation upgrade --install \
       --set image.nginx.repository=glasswallsolutions/reverse-proxy-nginx \
       --set image.nginx.tag=0.0.1 \
       --set image.squid.repository=glasswallsolutions/reverse-proxy-squid \
       --set image.squid.tag=0.0.1 \
       --set application.nginx.env.ICAP_URL=icap://54.77.168.168:1344/gw_rebuild \
       --set application.squid.env.ICAP_URL=icap://54.77.168.168:1344/gw_rebuild  \
       --set application.nginx.env.ALLOWED_DOMAINS='.microsoft.com.glasswall-icap.com\,www.microsoft.com.glasswall-icap.com' \
       --set application.nginx.env.ROOT_DOMAIN='glasswall-icap.com' \
       --set application.nginx.env.SUBFILTER_ENV='microsoft.com\,microsoft.com.glasswall-icap.com' \
       --set application.squid.env.ALLOWED_DOMAINS='.microsoft.com.glasswall-icap.com\,www.microsoft.com.glasswall-icap.com' 
       --set application.squid.env.ROOT_DOMAIN='glasswall-icap.com' \ 
       --set application.squid.env.ICAP_EXCLUDE_MIME_TYPE='text/html,application/javascript' \
       reverse-proxy chart/
	  
## Verify the installation

1. kubectl get ing -n icap-adaptation (copy the name of ingress name)
2. kubectl -n icap-adaptation edit ing <ingress_name_from_step1>
3. check spec->rules->host  and spec->tls->hosts check the entries here
4. kubectl get deployments -n icap-adaptation
5. verify nginx/squid deployment configuration i.e spec->containers->env . properties to check ICAP_URL, ALLOWED_DOMAINS, and SUBFILTER_ENV

## Microsoft Slow browsing problem

# Changes in running reverse proxy
    ```
    1. kubectl edit deployment reverse-proxy-squid -n icap-adaptation ## You might have different namespace
    2. Add these environment variable under spec-> template -> spec -> containers ->env
	    - name: ICAP_EXCLUDE_MIME_TYPE
	      value: text/html,application/javascript
	    
# For New Proxy
Add below line while deploying helm chart
 ```
 --set application.squid.env.ICAP_EXCLUDE_MIME_TYPE='text/html,application/javascript' \

