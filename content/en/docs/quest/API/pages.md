---
title: Pages
weight: 2
description: These are the units that represent single screens in minno-quest, they will hold all your specific questions.
---

The basic unit in PIquest is the **page**. A page is usually one screen in your questionnaire. If your questionnaire presents all its questions in one screen, it will probably have only one page. The properties within a page manage how the question(s) is(are) displayed and how the participants interact with it (e.g., select an answer and then click a submit button).

property		| description
--------------- | ---------------------
name 			| (text) The identifier for this page, is used mainly for logging.
text			| (text) Some html to present above the questions.
decline 		| (true, false, 'double'. default:false) Whether to allow participants decline to answer the questions on this page. This option displays a "decline" button that proceeds to the next page without validation and marks this response as "declined". If decline is set to 'double' then two click are required in order to decline answering.
declineText		| (text) The text for the decline button (default value: "Decline to answer")
prev 			| (true or false) Whether to allow users to return to the previous page. The previous button does not appear on the first page (default value: false).
prevText		| (text) The text for the previous button (default value: "Go Back")
noSubmit		| (true of false) remove submit button (useful when using the 'autoSubmit' function of some questions; default value: false).
submitText		| (text) The text of the submit button (default: "Submit").
header  		| (text) Text for the page header.
headerStyle		| (Object) A [css object](#http://api.jquery.com/css/#css-properties)  to set the style of the header (see examples below).
progressBar 	| (text) Text for the progress bar (You might want to use a template for this, maybe something like: `<%= pagesMeta.number %> out of <%= pagesMeta.outOf%>`.).
numbered 		| (true of false) Whether to  display the number of each question (default value: false).
numberStart		| (Number) The number for the first question in the page (default: 1).
timer 			| (Object) This property controls the page timer, its properties are documented right [here](#page-timer).
questions 		| (Array or Object) an array of [questions](questions) to be displayed in the page. Note that the questions may be randomized and chosen conditionally using a [mixer](/docs/sequencer/mixer). This property also accepts a single question object if you want to present only a single question per page.
lognow 			| (true or false) Whether to log the questions on this page. This option is useful when you know that the page will not be accessed any more. It allows you to use the `pulse` option from the [logger](../settings#logger) to send questions as they are being answered instead of sending only at the end of the task. (default: false)
animate 		| (text) What types of animation to use when this page enters and leaves the screen. We currently support three animations: fade, slide, and drop-in. You can use any and all of them by adding them to the string (for example: "slide fade" will activate both of these animations).
v1style			| (true or false or 2) Activate in order to use the version 0.1 style. Currently this only affects the way that the submit/decline buttons are presented. Set this to 2 in order to use the latest version of 0.1
autoFocus 		| (true or false) Automatically focus on the first input in the page so that keyboard users have an easier time.
pageValidation  | (function) A custom validation function. Return `false` if the page is unvalid. You can control the error message using the `pageValidationText` property.
pageValidationText | (text) The error message for cases where `pageValidation` is not valid. By default the error message here is *Page Invalid*.

For example, a page can look something like this:

```javascript
var page = {
	header: 'Personal information:',
	headerStyle: {'background-color':'red',color:'blue'},
	decline: true,
	declineText: 'I prefer to keep this information to myself',
	questions: [
		{type:'text', stem:'What is your name?'},
		{type:'text', stem:'Where do you live?'}
	]
}
```

# Page Timer
The page timer allows you to constrain the time that users have to answer their questions. In order to control it, you may use the following properties.

property		| description
--------------- | ---------------------
duration 		| (number) How long (in seconds) before the timer ends.
submitOnEnd 	| (true or false) Whether to submit when the timer ends (true by default).
show 			| (true or false) Whether to display a visual countdown (true by default).
direction 		| ("up" or "down") Whether to use a countdown or to count up ("down" by default).
removeOnEnd 	| (true or false) Whether to remove the visual timer when the countdown ends (if you don't auto proceed when the timer ends. ).		
message 		| (String or Object) Display a message at the end the timer duration. You can input a simple string here, but if you want finer control over the content of the message you can use the [object API](#page-messages).

### Timer Message
You may want to display a message to the users when they run out of time at the end of a timer. Messages can be simple strings, or if you want finer control over the content of the message you can use the object API, that may be used as follows:

property		| description
--------------- | ---------------------
header 			| The header text for the message (defaults to "Timer Done").
body 			| The body of the message.
button 			| The close button (defaults to "close").

All these strings may use templates, and have access to the following objects: `global`, `current`, `pagesData`, `pagesMeta`.
