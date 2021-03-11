---
title: Questions
weight: 3
description: Details of all the question types that minno-quest supports
---

# Shared properties
All question types share some basic properties:

property		| description
--------------- | ---------------------
type 			| (text; default: 'text') Controls the question type. See the possible types below. 
name 			| (text) The name that this question is marked with when it is logged. Also allows you to refer to the question from within PIquest.
stem 			| (text; default: '') The text for the question itself..
stemCss			| A [css object](#http://api.jquery.com/css/#css-properties) to be applied to the stem.
description 	| (text; default: '') Any additional text you want in order to extend the question description.
maxWidth 		| Force question inputs to have this maximum width. The `maxWidth` must include an explicit measuring unit (for example '800px' or '50%').
help			| (true or false;  (default: false)) Whether to display the question help text.
helpText		| (text) The question help text. (Some questions have default help texts, some don't).
lognow 			| (true or false) Whether to log this questions when the page is submitted. This option is useful when you know that the question will not be accessed any more. It allows you to use the `pulse` option from the [logger](../settings#logger) to send questions as they are being answered instead of sending only at the end of the task. (default: false)
errorMsg		| (Object: {}) This object has a property for each validation type. Setting the appropriate type changes the validation message. For instance setting the `required` property will change the validation message for instances where no response was given.

You may want to debug questions by setting the [debug level in the manager]({{< relref "docs/manager/api/settings#debug" >}}) to `verbose`.
You will then be warned in the console if a question name is reused 
(note: sometimes a question is supposed to be reused, if this warning pops up just make sure the use case is correct).

# Hooks

Questions have hooks that allow you to respond to many events in the life time of the question. Each hook is invoked with `global`, `current` and the question `log`. 

property		| description
--------------- | ---------------------
onCreate 		| At the creation of the question.
onChange 		| At each change of the question response (note that this hook may be called many times for each question).
onSubmit 		| When the question is submitted.
onDecline 		| When the question is declined.
onTimeout 		| When the timer finishes.
onDestroy 		| When the question is removed from the screen (either decline or submit).

For example, in case the participant made an error you can mark it on the current object:

```javascript
var questions = {
	stem: 'Please write "Hello"',
	onSubmit: function(log, current){
		// if the question response is not correct
		if (log.response !== 'Hello'){
			// mark an arbitrary flag so that it may be accessed somewhere else
			current.error = true;
		}
	}
}
```
