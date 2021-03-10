---
title: A secure connection (https)
weight: 40
---


It is highly recommended to run MinnoDashboard using a secure connection (i.e., https, using SSL). If you do ont use a secure connection, the data sent by your study participants to our server would not be encrypted. The same is also true for the cummunication sent by the researchers who build the study, including the password to their account. It is the norm to encrypt such communication online. This guide will cover how to enable SSL on your running dashboard server.

1.  Get a domain connected to the IP address of your server, such as using our [guide to do so with Freenom](./freedomain)
2.  Log in to the dashboard with an admin account
3.  From the dropdown menu's at the top of the screen, select Admin -> edit configuration
4.  If you do not have a SSL certificate, use the dropdown to change the server type to 'Greenlock'.  Enter your email in the box provided, and the domain you registered in the next box, i.e. mydomain.com.  This will automatically get the certificate for you using [Greenlock](https://www.npmjs.com/package/greenlock).
5.  If you do have a certificate, use the dropdown to change the server type to 'https'.  Copy the content of your cert and key files into the text boxes provided.
6.  Click save, and now it should work.  You'll have to connect using https, such as https://mydomain.com/dashboard from here on out.
