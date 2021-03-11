---
title: Stimulus
weight: 30
description: Defining and controling the stimuli that you display
---

Stimuli are responsible for *how* we present the media.


```javascript
{
    handle:'myStim',
    size: {height:25,width:25},
    location: {left:25,top:75},
    css:{color:'red','font-size':'2em'},
    media: {word: 'Your very cool stimulus'},
    data: {myData: 'some info', myOtherData: 'some other info'}
    nolog: false
}
```

## handle
Each trial may have multiple stimuli, and they are refered to by `handle`.
This is how refer to this specific stimulus inside the player (i.e. if we want to hide or show it). 
If more than one stimulus (per trial) has the same handle, all actions targeted at that handle will affect all stimuli.
You can set a stimulus handle either by setting the `handle` property, or by setting `handle` into the [data object](/docs/sequencer/variables/local).
Alternatively, if a stimulus is inherited from a set, the handle is defined by default as the set that the stimulus was inherited from.

## size
The size of the stimulus in percentage of the player canvas. By default, size is set to {height:'auto',width:'auto'}.

## location
The location to display the stimulus, in percentage of the player canvas. Where `left:20` means that the left border of the stimulus should be 20% from the left of the canvas. You may define any of `left`/`right`/`top`/`bottom` attributes.

Instead of specifying percentages you may use the keyword `center` in order to center the stimulus, or the keyword `auto` in order to override any previous settings.
By default, location is set to `{left:'center', right:'center',top:'center', bottom:'center'}`.

## css
Accepts any jquery css object. (see the [api](http://api.jquery.com/css/) for details)

## media
Defines the media associated with this stimulus.

## touchMedia
An alternative media object to display in case we are on a touch device (by default, the regular media is used).

## data
In addition to the basic attributes of the stimulus you may add any attribute you like as meta deta that will be available from within the player

## nolog
If this attribute is set to true, this stimulus (and its associated media) will not be logged.
This is usefull for example for focus stimuli and feedback that are identical for all trials and do not need to be logged.

By default nolog is set to false.

