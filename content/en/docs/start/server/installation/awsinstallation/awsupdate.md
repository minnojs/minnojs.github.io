---
title: AWS Update
weight: 10
disableToc: true
---

This guide will cover how to update your dashboard version installed on AWS. Set up your dashboard server first from our guide [here](../../awsinstallation).

1. Connect to your EC2 instance [using SSH](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html).

2.  From the terminal: run the following commands:
	*  `docker-compose pull`
	*  `docker-compose up --force-recreate --build -d`
	*  `docker image prune -f`
