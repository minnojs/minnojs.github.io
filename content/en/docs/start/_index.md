---
title: Getting started
weight: 1
description: From your first task to saving data and analysis.
---

Welcome to Minno! We're glad to have you here.
This section describes how you can start developing MinnoJS tasks and deploying them online in no time.

Creating an online task involves two processes: composing the task, and making it available online.
MinnoJS offers a full suite of tools for accomplishing both of these tasks.

## Composing a task
Tasks in MinnoJS are represented by simple text files.
These text files include the instructions needed to implement your task.
You can learn the basics of how to write these instructions in the [Core concepts](../core) section.

Your study will consist of three types of tasks. 
[Times sensitive tasks](../time) allow you to create interactive tasks and accurately measure reaction times.
[Questionnaires](../quest) create dynamic questionnaires with a variety of pre-made question types.
Finally, the [task manager](../manager) is responsible for orchestrating your tasks together.
Additionally, you will want to use the [sequencer](../sequencer) in order to control 
randomization, branching and much more within any of you tasks.

A typical study consists of a folder containing several Javascript files (with a `*.js` suffix),
and probably a folder with images.
It might look something like this:

```
study/
  ├── mgr.js
  ├── stroop.js
  ├── rosenberg.js
  └── images/
      ├── red.jpg
      ├── green.jpg
      └── blue.jpg
```

## Making it available
The next step for getting your study to run is deploying it to the web.
As soon as it is deployed to the web, anyone can access it with their browser.

People regularly access the web with browsers (such as Chrome, Edge, or Firefox).
But where *is* the "Web"?
The extremely simplistic answer is that the web is composed of a network of servers.
Each server makes some web pages (or other content) available to anyone that request it.
In order for our studies to run, we need them to be hosted on such a server that will make it available on the web.

MinnoJS provides several solutions for deploying to the web, depending on your needs.

The full [Minno Suite](server) provides an environment for calaboratively developing MinnoJS studies,
including a research dashboard, a study editor, and tools for callaboration and study management.
However, the Minno Suite requires some know how for installation and a server (e.g., one installed by your university IT),
or an account in a cloud service such as Amazon’s Web Services, or DigitalOcean.
It is suitable for a laboratory or an organization that wants to develop and run experiments at a large scale.

The [simple-minnno-server](https://github.com/minnojs/simple-minno-server) provides a simple way to run a single study on a PHP server.
Its big advantage is that PHP servers are easy to set up, and that free servers can be found easily.
However, it does not scale well to multiple studies, and requires direct tinkering with the files.
For detailed instructions on how to set it up see [this blog post](/blog/2020/03/12/simple-csv-server).

Some commercial sollutions exist that allow direct pluging in of MinnoJS studies.
You can [integrate](/blog/2020/01/01/using-minno-with-qualtrics) time sensitive tasks in [Qualtrics](www.qualtrics.com).
And many of the extentions support quatlrics as well.

Finally, if you just want to test something out you can use the [playgrounds](/) on this site for single tasks.
And many times it is useful to run a [local server](/blog/2020/02/01/develop-localy-with-minnojs) so that you can get swift feedback on each change that you make.

## Getting help

If you run into trouble, feel free to ask in the MinnoJS [Google-group](https://groups.google.com/g/minnojs), we're really nice, and love to help out.

And if you run into a bug, please let us know!
We do all the development on [github](http://github.com/minnojs).
Reporting an issue is extremely helpful, and if you can make a pull request - that would be really awesome.
