---
title: Settings
weight: 1
description: Global settings that affect all questions or the way that the questionnaire works.
---

Change the settings using the `addSettings` function. 
The first argument to the function is always the name of the setting, the second argument is the setting values.
In case the setting is an object, subsequent objects will extend each other so that settings may be progressively added.

```javascript
API.addSettings('settingName', 'settingValue');
```

# onEnd
`onEnd` is a function to be called as soon as the task ends. It should be taken care of automatically when PIQuest is run from within the task manager.

```javascript
API.addSettings('onEnd', function(){
	// Do something: for instance, redirect to 'my/url.js'
	location.href = 'my/url.js';
});
```

# logger
This setting controls the way that logging works within the player.

```javascript
API.addSettings("logger", {
	pulse: 34,
	url: '/my/url',	
	logfn: function(log,pagesData, global){
		return {name: log.name, set: global.setName};
	}
});
```

Setting 	| Description
----------- | ---------------
pulse 		| (Number; Default: 0) How many rows to collect before posting to the server. 0 means that the player sends to the server only at the end of the task. Note that only questions and pages marked with the `lognow` property will be pulsed. All other questions will be sent at the end of the task.
url 		| (Text; default:"") The URL to which we should post the data to.
logfn 		| (Function) The task has a default object that it logs, if you want to change the logged object itself, you may use a function of the form: `function(log, pagesData, global){return logObj;}`
error       | (Function) A function to manage errors in logging. It gets called when a post to the server fails.

Within the player, each question (as defined by unique question name) may be logged only once. By default questions are logged at the end of a page (on submit or decline), if you want to delay logging until the end of the task, you may do so by setting `nolog` in the appropriate page or question.

If you want a question not to be logged at all, simply do not give it a name.

# Timer
The questionnaire timer allows you to constrain the time that users have to answer the whole questionnaire.

```javascript
API.addSettings('timer', {
	duration: 10,
	message: {
		header: 'Time out!',
		body: 'You will now be redirected to the next task.'
	}
});
```

In order to control it, you may use the following properties.

property		| description
--------------- | ---------------------
duration 		| (number) How long (in seconds) before the timer ends.
show 			| (true or false) Whether to display a visual countdown (true by default).
direction 		| ("up" or "down") Whether to use a countdown or to count up ("down" by default).
removeOnEnd 	| (true or false) Whether to remove the visual timer when the countdown ends (if you don't auto proceed when the timer ends. ).		
message 		| (String or Object) Display a message at the end the timer duration. You can imput a simple string here. If you want finer control over the content of the message you can use the an object with the following properties: `header`: the header text for the message (defaults to "Timer Done"). `body`: the body of the message. `button`: the close button (defaults to "close").

