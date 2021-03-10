---
title: Interactions - actions
description: Define the reactions that MinnoJS has to user interactions.
---


If all the conditions in a row of interactions are true, its actions will be executed.

## Action types

### showStim
Display a stimulus, takes a stimulus `handle`. Use 'All' for all stimuli.
* `{type:'showStim',handle:'myStim'}`
* `{type:'showStim',handle:'All'}`

### hideStim
Hide a stimulus, takes a stimulus `handle`. Use 'All' for all stimuli.
* `{type:'hideStim',handle:'myStim'}`
* `{type:'hideStim',handle:'All'}`

### setStimAttr
Set a stimulus.data attribute, takes a stimulus `handle` and a `setter` object or function.
Any attributes in the setter object will be coppied to the stimulus.data object.
* `{type:'setStimAttr',handle:'myStim',setter:{property:'value',otherProperty:'otherValue'}}`
* The setter function:

    ```javascript
    {type:'setStimAttr',handle:'myStim',setter:function(){
        // do your mojo here :)
        // the context ("this") of this function is the stimulus model
    }}
    ```

### setTrialAttr
Set a trial.data attribute, takes a `setter` object or function.
Any attributes in the setter object will be coppied to the trial.data object.
* `{type:'setTrialAttr',setter:{property:'value',otherProperty:'otherValue'}}`
* The setter function:

    ```javascript
    {type:'setTrialAttr',setter:function(trialData, eventData){
        // do your mojo here :)
        // trialData is the data object for this trial
        // eventData is the internal event that triggered this action
        // the context ("this") of this function is the trial object
    }}
    ```

### setGlobalAttr
Set a global object property, takes a `setter` object or function.
Any attributes in the setter object will be coppied into the global object.
* `{type:'setGlobalAttr',setter:{property:'value',otherProperty:'otherValue'}}`
* The setter function:

    ```javascript
    {type:'setGlobalAttr',setter:function(globalObject){
        // do your mojo here :)
        // globalObject is the global object...
    }}
    ```

### trigger
Activate the input `handle`. If duration is set, the activation happens after the duration. By default the input `handle` is triggered immediately.
* `{type:'trigger',handle : 'now'}`
* `{type:'trigger',handle : 'later',duration:250}`

### setInput
Set input listener (useful for adding timeouts), takes an `input` [object](#input-).
* `{type:'setInput',input:{handle:'time',on:'timeout',duration:300}}`

### removeInput
Remove input listener, takes an input `handle` or an array of input handles. The special keyword `All` removes all listeners. **Warning** you must add listeners after using removeInput:All, or else the player will get stuck. This command removes triggers as well as regular input listeners.
* `{type:'removeInput',handle : 'time'}`
* `{type:'removeInput',handle : ['time','left']}`
* `{type:'removeInput',handle : 'All'}`

### resetTimer
Resets trial timer. The latency of any events from here on (including the current one) will be calculated back to the reset instead of the begining of the trial.
* `{type:'resetTimer'}`

### endTrial
Speaks for itself (note that any actions that come after this is called may not work properly).
* `{type:'endTrial'}`

### canvas
Change canvas style using any of the following properties (see [settings](#canvas)): `background`, `canvasBackground`, `borderColor`, `borderWidth`.
* `{type:'canvas', background:'blue'}`

### startMouseTracking
Starts mouse tracking. Mouse tracking logs all measurements into an array in `data`.
It stops when you call the `stopMouseTracking` action or automatically at the end of the trial.
Calling `startMouseTracking` when it is already running does not do anything.

* `{type:'startMouseTracking'}`
* `{type:'startMouseTracking', logAs:'tracking', logRate: 150, logStimulusLocation: ['myHandle']}`

property            | description
--------            | -----------
logAs               | Set the property within `data` to which the tracking data is logged (default: 'mousetracking').
logRate             | The minmum time between measurements in miliseconds (default: 15).
logStimulusLocation | An array of stimulus handles for which location data should be logged. You can use this to save the location of the stimuli you're using as response options.

The tracking data is logged as an array of Objects with the following structure:

property                | description
-----------             | -----------
time                    | Time in ms from the initiation of mouseTracking.
mouseX                  | The horizontal location of the mouse relative to the canvas.
mouseY                  | The vertical location of the mouse relative to the canvas.
&lt;handle&gth;X        | (optional) The horizontal location of the &lt;handle&gth; elment relative to the canvas.
&lt;handle&gth;Y        | (optional) The vertical location of the &lt;handle&gth; elment relative to the canvas.
&lt;handle&gth;Width    | (optional) The width of the &lt;handle&gth; elment.
&lt;handle&gth;Height   | (optional) The height of the &lt;handle&gth; elment.

Note that each row in the log represents a mouse movement, and not a point in time.
This means that if the mouse does not move, there can be long stretches of time without movement recording.
When analyzing the data, make sure you use the time property in order to identify movement timing, and do not assume that measurements occur at a pretedermined frequency.

### stopMouseTracking
Stops ongoing mousetracking.
* `{type:'stopMouseTracking'}`

### log
Log this action. Pushes this action into the logging stack so that it is later sent to the server (you can set how the player logs an action using the [logger settings](#logger))
* `{type:'log'}`

### custo
Run a custom function. This action is intended to for use by experienced users that want to tinker with the inner workings of the player - use at your own risk! 
The `fn` property takes a custom function. 
The function takes three arguments: `action` is the action object itself, the `eventData` is an object holding information about the triggering event, `trial` is an the implementation of the trial object.

* `{type:'custom',fn:function(action,eventData,trial){}}`

You can checkout some examples of the syntax in the [plaer code](https://github.com/minnojs/minno-time/blob/0.5/src/app/trial/interactions/actionList.js).

### goto
Responsible for the next trial we go to. This action will be executed only after the trial ends, you will probably want to follow it with an endTrial action.

The `destination` property defines what type of goto this is (default is "next").

The `properties` property is an object to compare to the trial data. Note that the properties will only compare to properties present in the raw sequence before inheritance!

* `{type:'goto',destination: 'next'}` goto the next trial (this is the default)
* `{type:'goto',destination: 'current'}` rerun the current trial
* `{type:'goto',destination: 'first'}` goto the first trial
* `{type:'goto',destination: 'last'}` goto the last trial
* `{type:'goto',destination: 'end'}` end this task
* `{type:'goto',destination: 'nextWhere', properties: {blockStart:true}}` goto the next trial that has these properties
* `{type:'goto',destination: 'previousWhere', properties: {blockStart:true}}` goto the previous trial that has these properties
