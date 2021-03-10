---
title: The Docker Configuration File
weight: 10
---

## The Docker Configuration File


This page will describe the parts of the docker-compose configuration file that you might want to edit.
___

    ports:
      - "80:80" #specify ports forwarding
      - "443:443" #specify ports forwarding
	  - "27018:27017"  # specify ports forwarding
By default the server will run on port 80 for http requests and 443 for https requests and 27018 for DB requests.  If you want to change it then you'd do something like "81:80" to make it run on port 81 for http requests.
___

    -SERVER_TYPE: "http" "http", "https", or "greenlock"
 
 "http" will make it only run with a http service.  "https" will make it run on https also using a certificate and key file that you provide.  "greenlock" will make it automatically aquire certificates for you using Greenlock.  When using https, update the part of the config file under "volumes" with "./localhost.crt" and "/localhost.key" to point to the file path of the crt and key files for your domain.  It is up to you to aquire them.  When using greenlock, update the OWNER_EMAIL and DOMAINS field with your email and domain, and also make sure that the DNS for your domain points to the machine you are running this on.
 ___
 
     volumes:
       - ./data/user:/usr/src/minnoserver/user
       - ./data/localhost.crt:/usr/src/minnoserver/localhost.crt 
       - ./data/localhost.key:/usr/src/minnoserver/localhost.key
   
   This sets the location on your local file system that will be used by the docker container to store dynamic content.  So if you want the user files for their studies to be somewhere else, you would change the ./data/user part.  The crt and key files are for SSL certificates.  If you want to have your dashboard be running SSL from the start, you can supply the crt and key files and set the server type to https.
 
 	  