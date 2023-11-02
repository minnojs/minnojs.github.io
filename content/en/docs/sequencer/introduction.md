---
title: Introduction
weight: 10
description: 
---

- [Mixers](#mixers)
- [Inheritance](#inheritance)
- [Templates](#templates)

The sequencer is an overarching term for all of the features that allow you to dynamically change the flow of your tasks.
It has three critical components: The mixer, templating and inheritance.

Throughout the sequencer documentation we will use [messages](../../manager/tasks/messages) as examples because they are the simplest element type.

### Mixers

Each PI task is composed of a series of elements which are presented to the users sequentially 
(i.e. trials for miTime, pages for miQuest and tasks for miManager). 
The sequence [**mixer**](../mixer) is responsible for the order  that these elements are presented to the users. 
It allows you to randomize the order of your elements.
It also allows you to repeat a task multiple times and randomly assign participants to experimental conditions.

For example, the following mixer randomizes the order of two tasks in *miManager*:

```javascript
API.addSequence([
    {
        mixer: 'randomize',
        data: [
            {type:'message', template: 'Task 1', keys: ' '},
            {type:'message', template: 'Task 2', keys: ' '}
        ]
    }
]);
```

### Inheritance
The element is the basic unit that is used across all tasks.
You can use the [inheritance](../inheritance) system in order to compose elements and base themselves one upon another, as well as grouping them into distinct sets.
This is useful both as a tool to improve the readability of you scripts (for instance keep code away from structure), and to allow another level of randomization and control.

The following is an example of inheritance that improves the readability of a task sequence.
It uses a message defined within the "simpleMessage" `set` as the base for the element within the sequence.
This allows the sequence to be less cluttered, and thus more readable.

```javascript
API.addTasksSet('simpleMessage', [
    {type:'message', template: 'Task 1', keys: ' '}
]);

API.addSequence([
    {inherit: 'simpleMessage'}
]);
```

### Templates
Finally you have fine control down to the level of individual element properties using [templates](../template). 
Templates allow you to use [Environmental Variables](../variables) in order to customize you elements.

The following code will display a message that says "Hello Randall Munroe".

```javascript
API.addCurrent({userName: 'Randall Munroe'});

API.addSequence([
    {type:'message', template: 'Hello <%= current.userName %>', keys: ' '}
]);
```