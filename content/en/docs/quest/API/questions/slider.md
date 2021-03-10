---
title: Slider
description: The slider question presents a slider that allows the user to pick a response along a preassigned range.
---

It allows either the creation a continuous scale or dividing the range into steps.
The values of the slider are always numbers.

These are the supported properties:

Property    			| Description
----------- 			| -----------
min         			| Maximum slider value (default:0).
max         			| Minimum slider value (default:100).
highlight   			| Show highlight to left of handle.
highlightDirection 		| By default the slider highlight goes from left to right. If you want it to go right to left set the property to 'rtl'. If you want the highlight to begin at the center, set this to 'center'.
steps       			| How many steps the slider should be divided into. These intervals are marked with pips and the handle snaps to them.
hidePips 				| When the slider is divided into steps, do not display the step pips.
showTicks 				| @EXPERIMENATAL: this option may change in the future. Mark three vertical lines to accent the slider visually.
leftLabel   			| A label to display on the top left of the slider.
leftLabelCss			| A style object to apply to the left label.
rightLabel  			| A label to display on the top right of the slider.
rightLabelCss			| A style object to apply to the right label.
labels					| An array of labels to display underneath the slider. They will be spread evenly across the slider.
displayValue			| Display the value of the slider, beneath the slider control.
required				| (true of false; default: false) Validation: require a non-empty string as a response.
dflt 					| The default value for the slider. If no default value is defined, the handle will not be displayed until the slider is first clicked.
autoSubmit				| Submit automatically on click or when handle is drop.

The most common use of the slider is the creation of a visual analog scale (VAS). This is an example of using a slider to create a Likert type scale:

```javascript
var quest = {
	type: 'slider',
	stem: 'Sliders are exremely useful.',
	min:1,
	max:7,
	steps:7,
	labels: ['Strongly Agree', 'Neutral', 'Strongly Disagree']	
}
```

{{< playground filename=slider.js >}}
define(['questAPI'], function(Quest){
    var API = new Quest();

    API.addSequence([
        { // page begins
            header: 'Slider questions',
            questions: [
                {
                    type: 'slider',
                    stem: 'Sliders are exremely useful.',
                    min:1,
                    max:7,
                    steps:7,
                    labels: ['Strongly Agree', 'Neutral', 'Strongly Disagree']
                }
            ]
        } // page ends

    ]);

    return API.script;
});
{{< /playground >}}
