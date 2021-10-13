---
title: Study Manager
weight: 40
description: "Study Manager provides a set of tools to organize and present tasks to participants"
---

Think of the Study Manager as the code that organizes your study, survey, or experiment.
Within Study Manager you will:

1. Define the tasks that comprise the study, and
2. Define the order those tasks are presented to participants

There are many types of tasks you can add to the Study Manager but the most common are questionnaires and time-sensitive tasks.
For the full list, see this [page](https://minnojs.github.io/docs/manager/tasks/). 

Advanced users may also use the Study Manager to define global variables all tasks can access or change the global settings of the study. 
You can learn more about the global settings [here](https://minnojs.github.io/docs/manager/api/settings/).


The Study Manager exists in a ‘mgr.js’ file.
Start this file by defining a manager object:

```javascript
define(['managerAPI'], function(Manager) {
    var API = new Manager();
	  API.setName('mgr');
});
```

Now you must tell Study Manger the tasks to include in your study. 
Learn about the types of tasks [here](https://minnojs.github.io/docs/manager/tasks/).
Let’s imagine your study consists of three tasks:

1. An informed consent page defined in the file ‘consent.js’
2. A self-esteem questionnaire defined in the file ‘rosenberg.js’
3. A debriefing page defined in the file ‘debrief.js’

You add these tasks to the Study Manager with the following code:

```
API.addTasksSet({
  consent: [{
    type: 'quest',
    name: 'consent',
    scriptUrl: 'consent.js'
  }],

  rosenberg: [{
    type: 'quest',
    name: 'rosenberg',
    scriptUrl: 'rosenberg.js'
  }],

  debriefing: [{
    type:'message',
    name:'lastpage’,
    scriptUrl: ‘debrief.js’, 
    last:true   
  }]    
});
```
Notice that each task is given a ‘name.’
You will use that name to refer to each task in the next section.

The next task is to define the order in which the tasks are presented to participants. 
This is referred to as the ‘sequence.’
Use the addSequence() function to define the sequence (i.e., order) the tasks are presented to participants. 
You can learn more about the addSequence() function [here](https://minnojs.github.io/docs/sequencer/).

```
API.addSequence([
	  {inherit: 'consent'},
    {inherit: 'rosenbergSelfEsteem'},
    {inherit: 'lastpage'}
 ]);
```
You can learn more about inheritance and the 'inherit' command [here] (https://minnojs.github.io/docs/sequencer/inheritance/).

Sequences can be much more complicated using mixers.
With mixers you can randomize the order of tasks, add conditional branches, and use random assignment.
You can learn more about mixers [here](https://minnojs.github.io/docs/sequencer/mixer/) 

Finally, you must write a line of code that starts the study running!

```
  return API.script;
```
And that’s it!
See the full example below. 
Also you can run a working example [here](https://minnojs.github.io/docs/manager/examples/weight/)


```javascript
define(['managerAPI'], function(Manager) {
    var API = new Manager();
	  API.setName('mgr');

API.addTasksSet({
 consent: [{
    type: 'quest',
    name: 'consent',
    scriptUrl: 'consent.js'
  }],

  rosenberg: [{
    type: 'quest',
    name: 'rosenberg',
    scriptUrl: 'rosenberg.js'
  }],

  debriefing: [{
    type:'message',
    name:'lastpage’,
    scriptUrl: ‘debrief.js’, 
    last:true   
  }]    
});

API.addSequence([
	  {inherit: 'consent'},
    {inherit: 'rosenbergSelfEsteem'},
    {inherit: 'lastpage'}
 ]);

 return API.script;

});
```
