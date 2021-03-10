---
title: AWS Cloud Installation
weight: 15
disableToc: true
---

This page covers getting a minnoServer instance running on AWS using docker. In short, all that it requires is duplicating an image of the server we already created on AWS, and configuring it and launching it.


1. [Sign up for AWS](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)

2. [Login](https://console.aws.amazon.com/console/home?nc2=h_ct&src=header-signin), and from the EC2 console left menu chose Images -> AMIs
3.  Change the filter to public images, and then search for AMI by id `ami-0ac765f8ae09dc5a3` .  
4.  It should show up, with name minnoServer.  Right click on it and select "launch"
5.  Choose whatever processor you want (the free tier one probably), then click "next: configure instance details"
6.  Keep clicking next until you get to the "configure security group" page.
7.  Click the "add rule" button twice, and set the 2 new rules to "HTTPS" and "HTTP", so in total you will have those 2 and "SSH" rules.  You don't have to mess with any of the details of the rules.  
8.  Then you can click "review and launch" and then "launch" from the next screen.
9.  On the next screen (a pop-up) you will have to create and download a key pair pem file. In the first drop-down list, select “Create a new key pair”. Give it whatever name you would like.  This file is what you will use to log into the server.  Don't lose it- you will not be able to log in without it. Then, click “Launch instances”. You will see a page indicating that “Your instance are now launching”. 
10.  On the bottom-right, click the button “View instances”. It will now appear in the "instances->instances" tab in the console.  Go there and click on it to get the details.  You will need to use the IPv4 Public IP and Public DNS (IPv4) later.  Write them down. 
11. Go to the url in your browsr: Public DNS (IPv4) + "/dashboard/", such as ec2-18-218-121-155.us-east-2.compute.amazonaws.com/dashboard/ .  This will be the dashboard.  the default admin user is username:admin , pw: admin123
12.  To be able to connect using https and make your server much more secure, follow the guide [here](../domain/) for details on connecting securely using a domain you already have, or using a free domain from Freenom.  If you prefer to exclusively use Amazon (for setting up https and obtaining a domain), the process will be a bit more complicated and will not be free. For that, follow our guide [here](./awspayssl/).