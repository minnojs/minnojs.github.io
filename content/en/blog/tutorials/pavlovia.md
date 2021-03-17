---
date: 2021-03-17
title: "Using MinnoJS with Pavlovia"
linkTitle: "MinnoJS Pavlovia"
description: "A short tutorial on how to use MinnoJS on the [Pavlovia](pavlovia.org) platform"
author: Elad Zlotnick
---

In this tutorial we will show how you can run a full MinnoJS study on [Pavlovia](pavlovia.org).

Pavlovia is a commercial platform for running behavioural studies.
It was created initially for running PsychoPy experiments, but it allows running experiments from other platforms as well.


Three steps are necessary to make an existing MinnoJS experiment available to run from Pavlovia:

1. modifying your MinnoJS manager file
2. creating a new Pavlovia project
3. changing the experiment status to PILOTING (only you can run your experiment) or RUNNING (your experiment is now available to participants)

## Modify your MinnoJS experiment

In order to use MinnoJS in Pavlovia, all you need to do is add [a plugin](https://cdn.jsdelivr.net/gh/minnojs/minnojs-pavlovia/minnojs.pavlovia.plugin.min.js) to you manager file.
In order to do so, require it at the first line of your script:

```js
define(['managerAPI', 'https://cdn.jsdelivr.net/gh/minnojs/minnojs-pavlovia/minnojs.pavlovia.plugin.min.js'], function(Manager, Pavlovia){
```

Activating the plugin is as simple as adding the following lines at the beginning of your script:

```js
var pavlovia = new Pavlovia();
API.addSettings('logger', pavlovia.logger);
```

Note, that this setting takes over all of your logging operations, and you should not change anything in the logger settings.

Finally, if you want the logging to be performed before the end of your manager sequence, 
you can use a custom task `pavlovia.finish`:

```js
API.addSequence([
    {inherit:'task1'},
    {inherit:'task2'},
    {inherit:'task3'},
    pavlovia.finish,
    {inherit:'debriefing'}
]);
```

## Setting up Pavlovia
In order to run studies on Pavlovia, you need to create a 

Once you have [signed-up](https://pavlovia.org/docs/designers/signup) with Pavlovia and [signed-in](https://pavlovia.org/docs/designers/signin) onto Pavlovia's GitLab,
you can create a new project by clicking on the [New Project] button on the [projects page](https://gitlab.pavlovia.org/dashboard/projects):.
A variety of options are available, such as whether the project is public or private.

You then need to clone the newly created, empty project onto your local machine by following the command line instructions given on the project page 
under the header *Create a new repository*.

## Changing the status of the experiment
Once you have created a new project, it will appear in your Pavlovia [dashboard](https://pavlovia.org/dashboard).

By default, a newly created experiment is INACTIVE and cannot be run. 
You can change its status to either PILOTING or RUNNING to make it possible for you only or for you and your participants to run it, respectively. 
You can read more about it [here](https://pavlovia.org/docs/experiments/piloting-running).
Make sure that Pavlovia is set to save data as CSV and **not** to the database.

## Fetching experiment data
All experiment's data are collected in the project's repository on GitLab. 
You can download them from the experiment's page in your [dashboard](https://pavlovia.org/dashboard) by clicking on [Download Results], 
or you can pull them from the server onto your local machine using git.
