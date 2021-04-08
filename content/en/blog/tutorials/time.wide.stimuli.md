---
title: Breaking out of the canvas in minno time
linkTitle: Large stimuli
date: 2021-04-08
author: Elad Zlotnick
---

By default minno-time makes sure that stimuli stay confined to the limits of the canvas.
This is done because of the assumption that all the action should be focused and controled within the screen.

I just ran into a situation where a stimulus needed to break out of the canvas and cover the whole background of the screen.
In order to do so, I needed to change the default styling used for the stimulus.
The stimulus was defined as follows:

```js
{
    name: 'background',
    media: {image: '/images/background.jgp'}
}
```

The way to target a stimulus with CSS is to use its `data-handle`.
Each stimulus has a `data-handle` attribute set to its handle.
Thus you can target a specific stimulus by using its handle.
In our case the handle is "background", and we can target the stimulus with the following CSS:
`.minno-stimulus[data-handle=background]`.
Change "background" into the appropriate handle according to your needs.

The change we want to do is to remove the `max-width` directive, like so:

```css
.minno-stimulus[data-handle=background] { max-width:none; }
```

In order to do so, we add an [injectStyle](/docs/manager/tasks/injectstyle) tasks to our manager sequence.

```js
API.addSequence([
    { type:'injectStyle', css: '.minno-stimulus[data-handle=background] { max-width:none; }' }, // set global style
    { type:'time', scriptUrl:'task.js'} // my task(s)
]);
```
