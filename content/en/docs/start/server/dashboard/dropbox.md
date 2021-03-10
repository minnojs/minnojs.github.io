---
title: Setting up Dropbox
weight: 15
---

## Setting up Dropbox


This page describes how to connect your minnoDashboard to Dropbox.  Synchronization with Dropbox allows users to backup their studies on their own dropbox account. After you enable this feature, each user can request to sync their own Dashboard account with their own Dropbox account.

The synchronization is on one direction only: any change in the Dashboard will be updated in the user’s Dropbox account. Changing those files outside of the Dashboard, however, will not influence the Dashboard. That is, modifying the files in the Dashboard can be done only through the Dashboard. 

<u>Note</u>: Because the files are synchronized by each user separately with their own Dropbox account, enabling this feature does not mean that admins will have access to those files.

<b>How to enable this feature:</b> To enable this feature on this Dashboard, you should create a dropbox application. To do so, you need a [dropbox account](https://help.dropbox.com/accounts-billing/create-delete/create-account). The basic free package includes 2GB (see more information about the basic package [here](https://www.dropbox.com/basic).

Once the admin has a working Dropbox account the creation of the application should be done as follows:

1.  Login to Dropbox developers: https://www.dropbox.com/developers

2.  Click on Create apps.

3.  Choose an API: Dropbox API.

4.  Choose The type of access you need: App folder

5.   Choose any name you want to the application

6.   That’s it - click on Create app to create the application

7.  The application will appear under the [App console](https://www.dropbox.com/developers/apps). Click on the icon to get access to the application details.

8.  Two important parameters should be provided to the researcher dashboard.  These two parameters are located in your Dropbox application page:
    * App key (public key that is used for the users)
    * App secret (public key that is used for the server to get access to the Dropbox - don’t share this key!!!).

9.  To avoid security issues, Dropbox asks developers to provide list of URIs that will be used by the application. This list is located in your Dropbox application page.  The URL will be with the format [http/https]://[domain]/dropbox/set.  When [http/https] depends on the certification authority of the dashboard and [domain] is the full URI of the dashboard (e.g https://mydomain/dropbox/set).  Please note: the extension of /dropbox/set is mandatory.  So if you dashboard is hosted at mydomain.com using https, the url you'd enter would be https://mydomain.com/dropbox/set

10. Log in to the dashboard with an admin account

11. From the dropdown menu's at the top of the screen, select Admin -> edit configuration

12. In the dropbox section, click the "Enable Dropbox Syncronization" radio button and enter in the app key and app secret key in the text boxes, and then click "save changes".

13. You are now done.  Users will be able to connect to dropbox now by going to their settings page by clicking on the gear icon to the right of the "Logout" button in the dashboard, and then clicking the "Syncronize with your Dropbox Account" button.



 	  