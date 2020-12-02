---
title: mastercard Overview
sidebar_label: Overview
---

see [Development Websites Dashboard for details](../../dashboards/websites/development.md)

# Reverse proxy configuration for mastercard website

(mastercard.co.uk.glasswall-icap.com)

## Demo video
[![](http://img.youtube.com/vi/jKVaHXvNlJQ/0.jpg)](http://www.youtube.com/watch?v=jKVaHXvNlJQ "Mastercard")


Steps:

1.Create an instance in EC2 and link Elastic IP to it

2.Launch Rancher in ec2 instance

    docker run -d --restart=unless-stopped -p 8080:80 -p 8443:443 --privileged rancher/rancher:latest

3.Setup AWS cloud credentials
    
    Under profile, select "Cloud Credentials" and click on "Add Cloud Credentials". Populate the details of region, access key, secret key, credentails name and save it.
    
4.Create an ec2 node template.

    Under profile, select "Node templates" and click on "Add template". Choose Amazon ec2 type for node template and fill it.
    
5.Create a K8s cluster.
    Go to Clusters in rancher UI.

    * Click on Add cluster. 
    * Select Existing nodes
    * Provide a cluster name
    * Click on next
    * Select all 3 checkbox and click Advance
    * add public IP / elastic IP in public address 
    * Copy command and run it in ec2 instance
    
6.Copy k8 custer config from rancher and setup cluster
    export KUBECONFIG=kubeconfig
    kubectl get nodes

7.
```
    git clone https://github.com/k8-proxy/gp-mastercard-website
    
    cd gp-mastercard-website/
    
    git checkout master_card_proxy 
    
    git pull
    
    git clone https://github.com/k8-proxy/s-k8-proxy-rebuild
    
    git clone https://github.com/k8-proxy/k8-reverse-proxy
    
    cd s-k8-proxy-rebuild/
    
    git checkout ssl_certs
    
    git pull
    
    cd ..
  
    cp values.yaml s-k8-proxy-rebuild/stable-src/chart/values.yaml 
    
``` 
     
10.Push images to dockerhub

    docker login

    cd k8-reverse-proxy/stable-src

    docker build nginx -t <docker registry>/reverse-proxy-nginx:0.0.1
    docker build squid -t <docker registry>/reverse-proxy-squid:0.0.1
    wget -O c-icap/Glasswall-Rebuild-SDK-Evaluation/Linux/Library/libglasswall.classic.so https://github.com/filetrust/Glasswall-Rebuild-SDK-Evaluation/releases/download/1.117/libglasswall.classic.so # Get latest evaluation build of GW Rebuild engine
    docker build c-icap -t <docker registry>/reverse-proxy-c-icap:0.0.1
    
    docker push <docker registry>/reverse-proxy-nginx:0.0.1
    docker push <docker registry>/reverse-proxy-squid:0.0.1 
    docker push <docker registry>/reverse-proxy-c-icap:0.0.1
    
11.Create certificate
    * Register DNS for your domain
    * SSH into instance where cluster is present
    * sudo apt-get update -y
      sudo apt-get install certbot python3-certbot-nginx -y
      sudo certbot certonly --nginx
      
    * Add your email and add domain www.mastercard.co.uk.glasswall-icap.com 
    * certificates will be created in /etc/letsencrypt/live/www.mastercard.co.uk.glasswall-icap.com/
    
    * Copy below output for crt and key respnectively
    
    crt=cat /etc/letsencrypt/live/www.mastercard.co.uk.glasswall-icap.com/fullchain.pem | base64
    key=cat /etc/letsencrypt/live/www.mastercard.co.uk.glasswall-icap.com/privkey.pem | base64
    
12.Deploy proxy
```
    cd s-k8-proxy-rebuild/stable_src/
    
    export KUBECONFIG=kubeconfig
    
    Replace crt and key with generated key above
    
    helm upgrade --install \
        --set image.nginx.repository=<docker registry>/reverse-proxy-nginx \
        --set image.nginx.tag=0.0.1 \
        --set image.squid.repository=<docker registry>/reverse-proxy-squid \
        --set image.squid.tag=0.0.1 \
        --set image.icap.repository=<docker registry>/reverse-proxy-c-icap \
        --set image.icap.tag=0.0.1 \
        --set ingress.tls.crt= crt \
        --set ingress.tls.key= key \
        reverse-proxy chart/

 ```   


