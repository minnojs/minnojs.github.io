---
title: Rank
description: Ranking questions allow your subjects to sort a list of values.
---

By default elements in the list are randomized.
The response returned by this question is an array of numbers corresponding to the original - pre-randomized list.
For example if you had a list `['a','b','c']` and it was sorted into`['a','c','b']` then the response array will be `[1,3,2]` because the second and third element changed locations. 

The syntax is fairly simple:

```javascript
var quest = {
      type: 'rank', 
      stem: 'Please sort the follownig activities according to level of difficulty:',
      name: 'mart',
      correct: false,
      list: ['Cooking', 'Running', 'Dancing', 'Studying']
}
```

Property    | Description
----------  | -----------
type        | Must be set to `'rank'`.
list        | (Array) An array values to be sorted (can be either strings or numbers).
required    | (true of false; default: false) Require the user to make a change from the original order (as defined in `list`).
correct     | (true of false; default: false) Require the user to order the list according to a preset value (as defined in `correctValue`
correctValue| (Array) The order that the list should be organized for the `correct` validator. This value should be a list of numbers coresponding to the target order.
randomize   | (true of false; default: true) If false prevents the automatic randomization of the list order.

{{< playground filename=rank.js >}}
define(['questAPI'], function(Quest){
    var API = new Quest();

    API.addSequence([
        { // page begins
            questions: [
                { // question begins
                    type: 'rank',
                    stem: 'Please rank the colors of the rainbow by brighness:',
                    list: [
                        'Red',
                        'Orange',
                        'Yellow',
                        'Green',
                        'Blue',
                        'Indigo',
                        'Violet'
                    ]
                } // question ends
            ]
        } // page ends

    ]);

    return API.script;
});
{{< /playground >}}
