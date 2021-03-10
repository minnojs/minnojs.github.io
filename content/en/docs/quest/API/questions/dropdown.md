---
title: dropdown
description: Presents a dropdown that the user can use to select a single response.
---

`dropdown` has the following parameters: 

property		| description
--------------- | ---------------------
dflt 			| The default *value* for this question.
autoSubmit 		| (true or false; default: false) If this property is set to true, selecting a response will submit the form.
randomize 		| (true or false; default: false) Shuffle response options after mixing them (the mixer is activated regardless of this parameter, this serves as a shortcut)
reverse 		| (true or false; default: false) Reverses the order of response options in this question. It is useful when you inherit a question and only wants to change the order of the response options. Or, if you want to have a between-participant condition that reverses the response scale for half of the participants.
numericValues 	| (true or false; default: false) If `numericValues` is true, default numeric values are set for each answer, they are set *before* randomization, but *after* the mixer is activated.
answers			| (Array: []) The list of possible answers for this question. There are two acceptable formats; (1) an array of strings/numbers, (2) an array of objects with `text`, `value` and optionally `group` parameters. The `group` parameter will display the values divided into groups with the same name.
required		| (true or false; default: false) Validation: require a response.
correct 		| (true or false; default: false) Validation: require the response to be correct (set the target value using `correctValue`)
correctValue 	| (*) Set the correct response value for the correct validation.
errorMsg		| (Object: {}) This object has a property for each validation type. Setting the appropriate type changes the validation message. For instance setting the `correct` property will change the validation message for instances where the correct response was not given.
