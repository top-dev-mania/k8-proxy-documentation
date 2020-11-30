---
title: gwwebsite Overview
sidebar_label: Overview
---

see [Development Websites Dashboard for details](../../dashboards/websites/production.md)

## Reverse Proxy for gp-glasswallsolutions-website

1. Follow the steps given in https://github.com/k8-proxy/s-k8-proxy-rebuild/tree/master/stable-src#install-kubernetes to install Rancher and a kubernetes cluster. At the end of this step, you will be successfully able to connect to a kubernetes cluster.

2. Build and Push the nginx, squid and icap server docker images to a docker registry by following steps given in https://github.com/k8-proxy/s-k8-proxy-rebuild/tree/master/stable-src#apps-deployment. At the end of this step, you should have 3 docker images with repository URLs and image tags

3. Clone https://github.com/k8-proxy/s-k8-proxy-rebuild.git repository

```
git clone https://github.com/k8-proxy/s-k8-proxy-rebuild.git
```

4. From `stable-src` directory of [k8-proxy/s-k8-proxy-rebuild](https://github.com/k8-proxy/s-k8-proxy-rebuild) repository run below commands to deploy the helm chart for proxy solution of glasswallsolution.com website. Update below command with docker repository url and image tag before running the command.

Make sure the variable `KUBECONFIG` is pointing to the path of `kubeconfig` file from the current terminal.

```
helm upgrade --install \
--set image.nginx.repository=<docker registry>/reverse-proxy-nginx \
--set image.nginx.tag=0.0.1 \
--set image.squid.repository=<docker registry>/reverse-proxy-squid \
--set image.squid.tag=0.0.1 \
--set image.icap.repository=<docker registry>/reverse-proxy-c-icap \
--set image.icap.tag=0.0.1 \
--set application.nginx.env.ALLOWED_DOMAINS='glasswallsolutions.com.glasswall-icap.com\,www.glasswallsolutions.com.glasswall-icap.com' \
--set application.nginx.env.ROOT_DOMAIN='glasswall-icap.com' \
--set application.nginx.env.SUBFILTER_ENV='glasswallsolutions.com\,glasswallsolutions.com.glasswall-icap.com' \
--set application.squid.env.ALLOWED_DOMAINS='glasswallsolutions.com.glasswall-icap.com\,www.glasswallsolutions.com.glasswall-icap.com' \
--set application.squid.env.ROOT_DOMAIN='glasswall-icap.com' \
--set icap.limit.cpu=500m \
--set icap.requests.cpu=500m \
glasswallsolutions chart/
```

5. Validation:

Once all the pods are running, there are 2 options to connect to the proxied website.

1. Forward the traffic from local machine to nginx service.

If the below command gives permission error to bind the port 443, please run the command with `root` user.

```
kubectl port-forward svc/glasswallsolutions-reverse-proxy-nginx 443:443
```

You have to assign all proxied domains to the localhost address by adding them to hosts file ( `C:\Windows\System32\drivers\etc\hosts` on Windows , `/etc/hosts` on Linux )
  for example: 

```
127.0.0.1 glasswallsolutions.com.glasswall-icap.com www.glasswallsolutions.com.glasswall-icap.com
```

2. Connect using nginx ingress.

You have to assign all proxied domains to the IP address of the machine where helm chart is deployed by adding them to hosts file ( `C:\Windows\System32\drivers\etc\hosts` on Windows , `/etc/hosts` on Linux )
  
  For example: 

```
54.78.209.23 glasswallsolutions.com.glasswall-icap.com www.glasswallsolutions.com.glasswall-icap.com
```

You can test the stack functionality by downloading [a rich PDF file](https://glasswallsolutions.com.glasswall-icap.com/wp-content/uploads/2020/01/Glasswall-d-FIRST-Technology.pdf) through the proxy and testing it against [file-drop.co.uk](https://file-drop.co.uk)
You can also visit [the proxied main page](https://glasswallsolutions.com.glasswall-icap.com) and make sure that the page loads correctly and no requests/links is pointing to the original `*.glasswallsolutions.com` or other malformed domains.

