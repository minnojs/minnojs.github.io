---
title: textNumber
description: textNumber questions consist of a simple text input that limits the participant to numeric responses only. 
---

This type of questions have the following parameters:


property		| description
--------------- | ---------------------
dflt 			| (Number; default: null) The default value for this question.
inline 			| Show the stem in the same line as the input box (this will make the input box narrower as well).
autoSubmit 		| (true or false; default: false) If this property is set to true typing `Enter` while this input is focused will submit the form.
min 			| (Number) Validation: minimum valid number.
max				| (Number) Validation: maximum valid number.
required		| (true or false; default: false) Validation: require a non empty string as a response.
correct 		| (true or false; default: false) Validation: require the response to be correct (set the target value using `correctValue`)
correctValue 	| (*) Set the correct response value for the correct validation.
errorMsg		| (Object: {}) This object has a property for each validation type. Setting the appropriate type changes the validation message. For instance setting the `required` property will change the validation message for instances where no response was given. Note that their is a special property `number` that is triggered whenever the response is not a valid number.

For example, this is a text question that asks for a number under 273:

```javascript
var quest = {
	type: 'textNumber',
	stem: "Please enter your height in cm",
	max: 273,
	required: true,
	errorMsg: {
		max: "That is a bit too much to believe... - even Robert Wadlow wasn't this tall!",
		number: "Your height has to be a number"
	}
}
```

{{< playground filename=textNumber.js >}}
define(['questAPI'], function(Quest){
    var API = new Quest();

    API.addSequence([
        { // page begins
            header: 'Text questions',
            questions: [
                { // question begins
                    type: 'textNumber',
                    stem: 'How many cups of coffee do you drink each morning?',
                    min: 1,
                    max: 10
                } // question ends
            ]
        } // page ends

    ]);

    return API.script;
});
{{< /playground >}}
