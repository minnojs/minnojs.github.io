---
title: selectOne & selectMulti
description: >
    The selectOne and selectMulti questions present a list of possible response options for the user to pick from.
    The only difference between them is that selectMulti allows the user to select more than one response option.
---

They have the following parameters:

property		| description
--------------- | ---------------------
dflt 			| The default *value* for this question; Use one value for `selectOne`, and an array of values for `selectMulti`.
autoSubmit 		| (true or false; default: false) If this property is set to true, Clicking twice on the same answer will submit the form. This options is not supported for `selectMulti`.
randomize 		| (true or false; default: false) Shuffle response options after mixing them (the mixer is activated regardless of this parameter, this serves as a shortcut)
reverse 		| (true or false; default: false) Reverses the order of response options in this question. It is useful when you inherit a question and only wants to change the order of the response options. Or, if you want to have a between-participant condition that reverses the response scale for half of the participants.
numericValues 	| (true or false; default: false) If `numericValues` is true, default numeric values are set for each answer, they are set *before* randomization, but *after* the mixer is activated.
style 			| The default style for the select questions is a vertical list (`list`). You can display the individual answers as a horizontal button group using `horizontal` instead, or if you have many short answers you can use `multiButtons` (you might want to use `minWidth` in order to fineTune the way your question looks). 
minWidth		| (String, default:auto) The minimum width for individual answers (e.g. '30%' or '200px'). Usefull in concert with `style`.
buttons 		| *@DEPRECATED* (true or false; default: false) Do not use this property any more! use `style` instead. </br> By default we use a vertical list format for this question. Set this property to true in order to use a horizontal scale (Likert style). This option  does not currently support extremely narrow screens.
answers			| (Array: []) The list of possible answers for this question. There are two acceptable formats; (1) an array of strings/numbers, (2) an array of objects with `text` and `value` parameters.
required		| (true or false; default: false) Validation: require a response.
correct 		| (true or false; default: false) Validation: require the response to be correct (set the target value using `correctValue`)
correctValue 	| (*) Set the correct response value for the correct validation (This should be an array for selectMulti).
errorMsg		| (Object: {}) This object has a property for each validation type. Setting the appropriate type changes the validation message. For instance setting the `correct` property will change the validation message for instances where the correct response was not given.

Each answer on the list has a value associated with it. By default the value is equal to the text of the answer. If `numericValues` is set, the value is set to the appropriate number. Using the object notation, you can set values of your own.

For example, the following question uses the plain notations, using `numericValues` to abstract numbers out of the result.

```javascript
var quest = {
	type: 'selectOne',
	stem: "Do you like bananas?"
	numericValues: true,
	answers: [
		'Very much',	// ==> 0
		'I guess',		// ==> 1
		'Not at all'	// ==> 2
	]
}
```

The following question uses the object notation to do the exact same thing:

```javascript
var quest = {
	type: 'selectOne',
	stem: "Do you like bananas?"
	numericValues: true,
	answers: [
		{text:'Very much', value:0},	// ==> 0
		{text:'I guess', value:1},		// ==> 1
		{text:'Not at all', value:2}	// ==> 2
	]
}
```

{{< playground filename=selectOne.js >}}
define(['questAPI'], function(Quest){
    var API = new Quest();

    API.addSequence([
        { // page begins
            header: 'Select questions',
            questions: [
                { // question begins
                    type: 'selectOne',
                    stem: 'When you say good morning, what do you mean?',
                    autoSubmit: true,
                    answers: [
                        'Do you wish me a good morning',
                        'Or mean that it is a good morning whether I want it or not',
                        'Or that you feel good this morning',
                        'Or that it is a morning to be good on',
                        'All of them at once'
                    ],
                    help: true,
                    helpText: 'Selecting an answer once colors it blue.<br/>' +
                        'You can change your answer by selecting another option.<br/>' +
                        'To confirm, click the selected (blue) button a second time.'
                } // question ends
            ],
            noSubmit: true
        } // page ends

    ]);

    return API.script;
});
{{< /playground >}}


Following is an example for `selectMulti`.

{{< playground filename=selectMulti.js >}}
define(['questAPI'], function(Quest){
    var API = new Quest();

    API.addSequence([
        { // page begins
            header: 'Select questions',
            questions: [
                { // question begins
                    type: 'selectMulti',
                    stem: 'On which days last week did you have breakfast?:',
                    style: 'multiButtons',
                    minWidth: '13%',
                    answers: [
                        1,2,3,4,5,6,7
                    ]
                } // question ends
            ]
        } // page ends

    ]);

    return API.script;
});
{{< /playground >}}
