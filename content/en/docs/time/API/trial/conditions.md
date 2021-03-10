---
title: Interactions - conditions
description: Define the conditions in which an interaction triggers
---

Each condition object has a `type` property that defines what type of evaluation to perform.

In addition, it has a `negate` property (false by default) that determines whether to activate the condition when the evaluation is true or when it is false.

Notably the `begin` event at the begining of each trial only evaluates interactions that have a `{type:'begin'}` condition.

It is possible to create complex conditions. 
The following condition, for example, is activated in case there is an input that is not equal to trial.data.customAttribute,
and the input handle is not "time".

```javascript
[
    {type:'inputEqualsTrial',property:'customAttribute',negate:true},
    {type:'inputEquals',value:'time',negate:true}
]
```

## Condition Types
### begin
Automatically activated at the beginning of the trial, and is never fired again.
* `{type:'begin'}`

### inputEquals
Check if the input `handle` equals to a static value, `value` may be either a string or an array strings.
* `{type:'inputEquals',value:'enter'}`
* `{type:'inputEquals',value:['left','right']}`

### inputEqualsTrial
Check if the input `handle` equals to the `property` property of trial.data
* `{type:'inputEqualsTrial',property:'customAttribute'}`

### inputEqualsStim
Check if the input `handle` equals to the `property` property of any one of the stimulus.data in this trial.
The optional property `handle` narrows the search down to stimuli fitting the `handle`
* `{type:'inputEqualsTrial',property:"customAttribute"}`
* `{type:'inputEqualsTrial',property:"customAttribute",handle:'myStimHandle'}`

### trialEquals
Check if the `property` property of the trial.data object equals to `value`.
* `{type:'trialEquals',property:'customProperty', value:'someValue'}`

### inputEqualsGlobal
Check if the input `handle` equals to the `property` property of the global object.
* `{type:'inputEqualsGlobal',property:'customAttribute'}`

### globalEquals
Check if the `property` property of the global object equals to `value`.
* `{type:'globalEquals',property:'customProperty', value:'someValue'}`

### globalEqualsTrial
Check if the global property `globalProp` equals to the trial.data property `trialProp`.
* `{type:'globalEqualsTrial',globalProp:'customAttribute', trialProp:'otherCustomAttribute'}`

### globalEqualsStim
Check if the global property `globalProp` equals to the `stimProp` property of any one of the stimulus.data in this trial.
The optional property `handle` narrows the search down to stimuli fitting the `handle`
* `{type:'globalEqualsTrial',globalProp:'customAttribute', stimProp:'otherCustomAttribute'}`
* `{type:'globalEqualsTrial',globalProp:'customAttribute', stimProp:'otherCustomAttribute', handle:'myStimHandle'}`

### inputEqualsCurrent
Check if the input `handle` equals to the `property` property of the current object.
* `{type:'inputEqualsCurrent',property:'customAttribute'}`

### currentEquals
Check if the `property` property of the current object equals to `value`.
* `{type:'currentEquals',property:'customProperty', value:'someValue'}`

### currentEqualsTrial
Check if the current property `currentProp` equals to the trial.data property `trialProp`.
* `{type:'currentEqualsTrial',currentProp:'customAttribute', trialProp:'otherCustomAttribute'}`

### currentEqualsStim
Check if the current property `currentProp` equals to the `stimProp` property of any one of the stimulus.data in this trial.
The optional property `handle` narrows the search down to stimuli fitting the `handle`
* `{type:'currentEqualsTrial',currentProp:'customAttribute', stimProp:'otherCustomAttribute'}`
* `{type:'currentEqualsTrial',currentProp:'customAttribute', stimProp:'otherCustomAttribute', handle:'myStimHandle'}`

### custom
It is also possible to create a custom condition:

```javascript
{type:'custom', fn:function(condtion, inputData, trial){
    // do your mojo here and return true or false
}}
```
