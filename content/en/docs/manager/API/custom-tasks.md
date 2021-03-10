---
title: Custom tasks
weight: 2
description: How to create tasks of your own
---

The miManager allows the creation of custom tasks.
The format is fairly simple though you probably need at least some experience with programing for it. 

#### Plugging in
miManager manages the task sequence for you as well as loading the task script (if needed). There are several ways to plug a new task into miManager, the all involve passing the activator function to the manager in various ways.

1. You can pass the activator function as a script.
2. You can pass it as the play property of the script object ().
3. You can set it into the `taskActivateProvider` using `taskActivateProvider.set(taskName, activatorFunction)` during the configuration stage of the angular flow (This is worth the trouble mainly if you intend to use this task many times).

#### Activator function
The activator function is the function that is responsible for the activation of your task as well as for the communication with miManager.

It should:
* Run your task (just do whatever you like).
* Return a function that may be used to force the end of the task.
* Call the `done` function whenever it is done.

The activator function is invoked using [angular dependency injection](https://docs.angularjs.org/guide/di), so you can use any of the angular [annotation](https://docs.angularjs.org/guide/di#dependency-annotation) methods to get dependencies.

The following dependencies are supported (as well as all standard angular services):

Service         | Description
--------------- | -----------
done            | A function that lets the manager know that the task has finished.
props           | An object with all sorts of useful tools.
$scope          | The task scope.
task            | The miManager element that defined this task.
script          | The task script (as defined in task.script or loaded from task.scriptUrl).
$element        | The tasks DOM Node wrapped in jqLite or jQuery.
global          | The global object
$injector       | an angularjs injector (it can allow you to $compile or accesses $rootScope)

#### Custom Task Example
The following displays a messages to the user and proceeds to the next task after 5 seconds:

```javascript
// the define wrapper
define(function(){
    // the script object being returned
    return {
        // custom script content
        content: 'Hi there, I\'m your custom message',

        // the activator function uses three dependencie
        play: function activator(done, script, $element){
            var timeoutId = setTimeout(done, 5000);
            $element.html(script.content);

            // will be called at the end of the task to clean things up
            // (whether the end is forced or triggered by 'done')
            return function clear(){
                clearTimeout(timeoutId);
                $element.empty();           
            };
        }
    };
});
```

In order to use it all you have to do is point the task to the correct url:

```javascript
var taskElement = {scriptUrl:'path/to/script'};
```
