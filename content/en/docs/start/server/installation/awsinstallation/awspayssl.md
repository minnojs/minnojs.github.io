---
title: AWS Paid SSL
weight: 20
disableToc: true
---

This guide will cover how to enable SSL on your running AWS server through purchasing a domain and services from Amazon. Set up your dashboard server first from our guide [here](../../awsinstallation).

1.  Go to https://console.aws.amazon.com/route53/home
2.  Click the "Register Domain" button                                          
3.  Type in the domain name you want and the suffix you want and click the "Check" button.  Amazon you will then be able to click "add to cart" to purchase the domain if it is available, or will be given suggestions for alternatives that are open for purchase if not. Scroll to the bottom of the page and click the "continue" button once it is in your cart
4.  The next page will have a lot of personal info that you will have to fill out.  This is to register you as owner of the domain, and make sure that changes to it have to go through you.  Click the button to continue when you are done
5.  Click the checkbox to agree to their Registration Agreement, and then the "Complete Purchase" button.  
6.  You will be emailed about the domain at the email you entered.  If you don't click the link in the email within 15 days to verify that you provided a valid email address, the registrar will suspend your domain. A suspended domain is not available on the Internet.
7.  After you click the link in the email, in a day or 2 you will get another email saying that your domain was successfully registered with Route 53
8.  Go to the Amazon certificate manager at https://us-east-2.console.aws.amazon.com/acm and request a certificate.  If this is your first time there then click provisioning a certificates -> get started.
9.  request a public certificate and click the request a certificate button
10.  type in your domain name in the text box, then click “add another domain to this certificate”, and then "www" + your domain name in the next box, and click next.  So for example if your domain is test.com, the 2 boxes would have test.com and www.test.com
11.  Leave it as DNS validation and click Rreview.  Then click “Cconfirm and request” on the next page
12.  Click the arrow by the domain to expand the view.  
13.  Click the "create record in route 53" button, and then click the “Create” button in the window that pops up.
14.  Wait 30 minutes - 2 hours for the change to propagate
15.  The certificate manager will list the status as "issued" once it is ready for you to complete.  If it fails after 24 hours you can try deleting it and resubmitting.
16.  Go back to the EC2 dashboard at https://us-east-2.console.aws.amazon.com/ec2 and then click on the "Load Balancers" link
17.  Click on the "Create Load Balancer" button
18.  Choose "Application Load Balancer" by clicking on the "Create" button for it
19.  Type in a name for it
20.  Click the "add listener" button and then select "HTTPS" from the "choose a protocol" dropdown
21.  Check the boxes for at least 2 subnets under the "availability zones" area
22.  Click the "Next: configure security settings" button at the bottom right
23.  The next page lets you set up a certificate.  It should default to the one that you create and got issued earlier (the name will appear in the Certificate name, and the selected Certificate type would be “Choose a certificate from ACM”).  If yes, you can, just click the “Next: Configure Security Group” button at the bottom right again.  Otherwise choose "Choose a certificate from ACM" and then from the "certificate name" dropdown choose the one with your domain name.
24.  Choose the security group you made in part 7 of the initial guide (you can see the name of that security group if you go to EC2 Dashboard->Running Instances, on the far right of the records you have for the relevant instance), and click “Next: Configure Routing”.  Or if you don't see that then choose to create a new security group, and then Click the "add rule" button twice, and set the 2 new rules to "HTTPS" and "HTTP", so in total you will have those 2 and "SSH" rules.  You don't have to mess with any of the details of the rules.  
25.  You should be on the "Configure routing" page now.  From the "target group" dropdown, select "existing target group", and then select the name from the dropdown that you previously entered. I chose “New target group” entered a name, selected the Instance tha matached the Instance ID on your EC2 page, clicked “Add to registered”, clicked Next:Review, clicked “Create”, 
26.  Now you are done configuring it, so just keep clicking the next button, and then finally "create" one you get that button.  You should get a message saying "Successfully created load balancer".  
27.  Close the dialogue and now you should see a page showing you your load balancers, with the one you just created appearing.
28.  Click on the row with your load balancer, and then from the details page write down the DNS name that it gives.  
29.  Go back to the Route 53 dashboard at https://console.aws.amazon.com/route53/home , or from Services->Route53and click on the "Hosted zones" link
30.  Click the radio button for your hosted zone and then click the "go to record sets" button.
31.  You should see 2 rows with type "A".  Click on each of them to highlight them, and then from the "edit record set" box that appears on the right, Click the Alias "Yes" radio button, then for the alias target type in the DNS name that you saved in step 37, and finally click the "save record set" button.
32.  Now after waiting for up to 5 minutes, you should be able to access the minnoSuite dashboard at your domain + "/static", such as www.implicit.ga/static .  Https will work also.  This will be the dashboard.  the default admin user is username:admin , pw: admin123

