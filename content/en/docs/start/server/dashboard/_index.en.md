---
date: 2016-04-09T16:50:16+02:00
title: Using the Dashboard
weight: 1
---
MinnoSuite allows creating web studies, running them, and downloading their data. It includes three components. **MinnoDashboard** is a web application that operates researcher accounts. The researchers use their accounts to create studies, run them, and read their data. **MinnoPlayer** is a JavaScript-based language that allows creating studies with questionnaires, reaction-time tasks, and simple message pages. **MinnoServer** collects the data and provides researchers access to the data. MinnoSuite comes with example studies, including several examples for IAT (Implicit Association Test) studies.

You can install MinnoSuite on your own server, by following the installation guides on this website. If you want (paid) help installing MinnoSuite, creating studies, and analyzing their data, you can contact Project Implicit at [services@projectimplicit.net](services@projectimplicit.net).

After installing MinnoSuite on your own server, the only account in the system is the admin account. The admin creates accounts for the researchers who use the website (e.g., the grad students in your lab). The researchers use those accounts to create studies, run them, and download their data. This documentation website explains how to do that.


What the MinnoSuite does _not_ support? 

* There is no graphical user interface for a point-and-click authoring of the studies. Researchers write code (in MinnoPlayer's simple language).
* MinnoSuite does not include a participant-pool website. You get a link to each study and use that link in your own participant pool (including Sona System, MTurk, Prolific, etc.). 
* MinnoPlayer does not support live interaction between different participants. 
* You can add video and audio stimuli to MinnoPlayer studies, but that might require some advanced programming.
* MinnoPlayer does not require the participants to install anything. That means that its time precision is limited, in comparison to desktop programs. Currently, there is no millisecond-precision solutions in web studies that do not require the participants to install the program on their own computer. 

