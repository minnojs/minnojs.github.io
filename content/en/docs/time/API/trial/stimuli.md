---
title: Stimuli \ Layout
description: A collections of stimuli to be displayed
---

The `layout` and `stimuli` are arrays that list the [stimuli](../../stimuli) associated with this trial. 
Stimuli in `layout` will be automatically displayed throughout the trial, and will not be affected by any [actions](../actions).
Stimuli within `stimuli` are not displayed automatically and may be dynamically interacted with during the trial (see [interactions](../actions)).

```javascript
{
    layout: [
        stimulus1,
        stimulus2
    ],
    stimuli: [
        stimulus3,
        stimulus4
    ]
}
```
