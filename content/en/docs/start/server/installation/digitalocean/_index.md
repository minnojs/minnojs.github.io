---
title: DigitalOcean Installation
weight: 16
---

Installing MinnoSuite on DigitalOcean is extremely easy. Using DigitalOcean is not free, but probably the cheapest option would be enough for most labs. 

1.  Register / sign in to DigitalOcean [here](https://www.digitalocean.com/) .



2.  Go [here](https://marketplace.digitalocean.com/apps/docker) and click the "Create Docker Droplet" button.

3.  Pick which price tier to use, probably the cheapest one at $5/month.  The defaults are probably fine for other options.  Go through everything until your droplet is created.

4.  [Connect to the droplet using SSH](https://www.digitalocean.com/docs/droplets/how-to/connect-with-ssh/).  You should have an email from DigitalOcean with the ip address, username, and password to use.

7.  From the command line, run:  `wget "https://minnojs.github.io/docsite/installation/basicinstallation/docker-compose.yml"`

8.  Next run:  `docker-compose up -d`

9.  You should now be able to enter the IP address of your droplet into your browser bar and connect to the dashboard.

10.  To set up your domain with it and enable SSL, follow our guide [here](../domain/).

11.  If you need to shutdown the docker server, from the command line run `docker-compose down`.
