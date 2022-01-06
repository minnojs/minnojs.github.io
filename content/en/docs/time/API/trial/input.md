---
title: Input
weight: 10
description: Listenting for user input
---

The input attribute lists the input objects that the player reacts to.
Each input object must include both a `handle` and an `on` property.

`handle`: the way we refer to this input element inside the player (e.g., 'rightClick')
`on`: what triggers this input element. for now we have several types of input:

## Input types

### keypressed

Takes a `key` property that may either be a key code, a one letter string, or an array of keys.
* `{handle: 'enter',on: 'keypressed',key:'a'}`
* `{handle: 'enter',on: 'keypressed',key:13}`
* `{handle: 'enter',on: 'keypressed',key:[13,'a']}`

### keyup

Takes a `key` property that may either be a key code, a one letter string, or an array of keys.
* `{handle: 'enter',on: 'keypressed',key:'a'}`
* `{handle: 'enter',on: 'keypressed',key:13}`
* `{handle: 'enter',on: 'keypressed',key:[13,'a']}`

### click

Takes either a stimulus handle (`stimHandle`) or an html element (`element`).
The input is activated when the user clicks the stimulus or the html element.
In case an element is defined it is presented as soon as the input is activated.

* `{handle:'right',on:'click',stimHandle:'myStimHandle'}`
* `{handle:'right',on:'click',element:htmlElement}`

### mouseup

Takes a stimulus handle (`stimHandle`). Triggers each time the mouse key is released over the space of the target object.
* `{handle:'right',on:'mouseup',stimHandle:'myStimHandle'}`

### mousedown

Takes a stimulus handle (`stimHandle`). Triggers each time the mouse key is pressed over the space of the target object.
* `{handle:'right',on:'mousedown',stimHandle:'myStimHandle'}`

### mouseenter

Takes a stimulus handle (`stimHandle`). Triggers each time the mouse enters the space of the target object. (note that this behaviour is meaningless in touch devices)
* `{handle:'right',on:'mouseenter',stimHandle:'myStimHandle'}`

### mouseleave

Takes a stimulus handle (`stimHandle`). Triggers each time the mouse leaves the space of the target object. (note that this behaviour is meaningless in touch devices)
* `{handle:'right',on:'mouseleave',stimHandle:'myStimHandle'}`

### timeout

Takes a `duration` property and fires after the duration passes
* `{handle:'time',on:'timeout',duration:300}`
* `{handle:'time',on:'timeout',duration:[300,600,900]]}`            pick a random value from an array
* `{handle:'time',on:'timeout',duration:{min:300, max: 900}}}`      randomly pick from within a range
* `{handle:'time',on:'timeout',duration:function(){return 630}}`    use a custom function to pick duration

## Shortcuts

In addition, we have several shortcuts for commonly used inputs:
* `{handle: 'enter',on: 'enter'}`
* `{handle: 'space',on: 'space'}`
* `{handle: 'escape',on: 'esc'}`
* `{handle:'left',on:'leftTouch'}`
* `{handle:'right',on:'rightTouch'}`
* `{handle:'top',on:'topTouch'}`
* `{handle:'bottom',on:'bottomTouch'}`

`leftTouch`, `rightTouch`, `topTouch` and `bottomTouch` support the property `css` that will allow you to change the style of the touch area, for example:

```javascript
{handle:'bottom', on: 'bottomTouch', css: {background:'blue', width: '50%'}}
```

Protip: In addition to the preset input types you can create custom input:
```javascript
    {
        handle: 'myInput',
        /**
        * @arguments inputObj<Object>: the full input object passed to Minno
        * @arguments canvas<HTMLelement>: the canvas element
        * @arguments stream<Function>: the constructor for a mithril stream
        * returns Stream
        **/
        on: function(inputObj, canvas, stream){
            var $listener = stream(); // set up listener
            // trigger listener after 5000ms
            API.getCurrent().timerID = setTimeout(function(){
                $listener({}); 
            }, 5000);
            // must return a stream
            return $listener;
        },
        off: function(){
            // clear listener (get's called when you remove an input)
            clearTimeout(API.getCurrent().timerID)
        }
    }
```
