---
title: gwfiledrop Overview
sidebar_label: Overview
---

see [Development Websites Dashboard for details](../../dashboards/websites/development.md)

# Reverse proxy for filedrop website

# File-drop website Proxy Setup on Kubernetes (k8-v01)

## How it works

![Architecture diagram](https://user-images.githubusercontent.com/20454870/98290700-b10d2300-1fb2-11eb-91d4-8fab6e5570d9.png)

## Install kubernetes

### Rancher

Create terraform script to bootstrap Kubernetes Rancher cluster.

or else, Follow the steps given in https://github.com/k8-proxy/s-k8-proxy-rebuild/tree/master/stable-src#install-kubernetes to install Rancher and a kubernetes cluster. At the end of this step, you will be successfully able to connect to a kubernetes cluster.

## Apps deployment

### Clone the https://github.com/k8-proxy/k8-reverse-proxy repository and checkout `develop` branch

```
git clone https://github.com/k8-proxy/k8-reverse-proxy.git --recursive
cd stable-src
```

### Build and push docker images for ngnix and squid service

Below is example command to login to a docker registry(dockerhub)

`docker login -u <username> -p <password>`

```
docker build nginx -t <docker registry>/reverse-proxy-nginx:0.0.1
docker push <docker registry>/reverse-proxy-nginx:0.0.1

docker build squid -t <docker registry>/reverse-proxy-squid:0.0.1
docker push <docker registry>/reverse-proxy-squid:0.0.1

wget -O c-icap/Glasswall-Rebuild-SDK-Evaluation/Linux/Library/libglasswall.classic.so https://github.com/filetrust/Glasswall-Rebuild-SDK-Evaluation/releases/download/1.117/libglasswall.classic.so # Get latest evaluation build of GW Rebuild engine
docker build c-icap -t <docker registry>/reverse-proxy-c-icap:0.0.1
docker push <docker registry>/reverse-proxy-c-icap:0.0.1
```

**Install Kubectl**

Ref: [https://kubernetes.io/docs/tasks/tools/install-kubectl/](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

- Download kubectl version 1.19 (You can download latest also)
  _curl -LO https://storage.googleapis.com/kubernetes- release/release/v1.19.0/bin/linux/amd64/kubectl_

- Make the kubectl binary executable. `chmod +x ./kubectl_`
- Move binay to your PATH _`sudo mv ./kubectl /usr/local/bin/kubectl_`
- Test kubectl `kubectl version –client`

### Deploy to Kubernetes

Update the below command with the image name and image tag used in above step.

Image tag "0.0.1" in below command is just used as an example. Update below command with the same image tag used in above step(Build and push).

From `stable-src` directory of `s-k8-proxy-rebuild` repository run below commands to deploy the helm chart.

Make sure the variable `KUBECONFIG` is pointing to the path of `kubeconfig` file from the current terminal.

```
helm upgrade --install \
--set image.nginx.repository=<docker registry>/reverse-proxy-nginx \
--set image.nginx.tag=0.0.1 \
--set image.squid.repository=<docker registry>/reverse-proxy-squid \
--set image.squid.tag=0.0.1 \
--set image.icap.repository=<docker registry>/reverse-proxy-c-icap \
--set image.icap.tag=0.0.1 \
reverse-proxy chart/
```

Verify that all pods(nginx, squid, icap) are running by executing below command

```
kubectl get pods
```

Once all the pods are running, there are 2 options to connect to the proxied website.

1. Forward the traffic from local machine to nginx service.

If the below command gives permission error to bind the port 443, please run the command with `root` user.

```
kubectl port-forward svc/reverse-proxy-reverse-proxy-nginx 443:443
```

You have to assign all proxied domains to the localhost address by adding them to hosts file ( `C:\Windows\System32\drivers\etc\hosts` on Windows , `/etc/hosts` on Linux )
for example:

    127.0.0.1 glasswall-file-drop.com.glasswall-icap.com file-drop.co.uk.glasswall-icap.com

### Verification

Connect using nginx ingress.
You have to assign all proxied domains to the IP address of the machine where helm chart is deployed by adding them to hosts file ( `C:\Windows\System32\drivers\etc\hosts` on Windows , `/etc/hosts` on Linux )

For example:

```
54.78.209.23 glasswall-file-drop.com.glasswall-icap.com
```

You can test the stack functionality by uploading and downloading [a rich PDF file]

You can also visit [the proxied main page](https://www.gov.uk.glasswall-icap.com/) and make sure that the page loads correctly and no requests/links is pointing to the original `*.gov.uk` or other malformed domains.

### DNS Changes

Once local testing is successful then ask for DNS changes to be accessed by all.
glasswall-file-drop.com.glasswall-icap.com ==> 3.133.161.191
