---
title: Tasks
weight: 1
description: Introduction to tasks and their common parameters
---

The basic unit in miManager is the **task**. 
There are many [types of tasks](../tasks) available, 
and you can also create [custom tasks](../api/custom-tasks) of your own.
Tasks are defined within the sequence just like any other element, 
and you can use mixers, inheritance, and templates to control their flow.

For example, following is a manager sequence with two subsequent tasks - first a questionnaire, then a time-sensitive tasks.

```js
API.addSequence([
    { type: 'quest', name: 'race-questionnaire', scriptUrl:'race.quest.js'},
    { type: 'time', name: 'race-iat', scriptUrl:'iat.js'}
]);
```

#### Task properties

All tasks have some common properties that can be used to customize their behaviour.
Following is a list of such properties and a description of their behaviour.

Property    | Description
----------- | -------------
name        | Task name.
type        | Type of task (quest,message etc.).
pre         | A function to invoke before the task (may return a promise).
load        | A function to invoke as soon as the task is loaded (may return a promise).
post        | A function to invoke after the task (may return a promise).
canvas      | A canvas object (as defined under [settings](../settings#canvas)) to invoke at the beginning of the task and remove 
title       | A string to be used as the page title (the name displayed on the tag). It is reset at the end of the task.
preText	    | A template to be expanded before the task
postText    | A template to be expanded after the task
current     | An object that will be merged into the task `current` object.


