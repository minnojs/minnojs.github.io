---
title: Text & Textarea
description: >
    The text and textarea questions consist of a simple text input in which the users can type in text. 
    The difference between them is that text questions consist of a single line, whereas textareas are multiline.
---

Both types of questions support the following properties.

property		| description
--------------- | ---------------------
dflt 			| (test; default value: "") The default value for this question.
inline 			| Show the stem in the same line as the input box (this will make the input box narrower as well).
width 			| (Number or text) The width of the input box (By default numbers are translated to pixels, but you can use text to use other units).
autoSubmit 		| (true or false; default: false) If this property is set to true typing `Enter` while this input is focused will submit the page.
minlength 		| (Number) Validation: force at least this number of characters.
minLength 		| @DEPRECATED see minlength. (Number) Validation: force at least this number of characters.
maxlength		| (Number) Validation: force at most this number of characters.
maxlengthLimit 	| (true or false) Do not allow the user to input more characters than defined by `maxlength` (if maxlength is not defined, any number of characters will be allowed).
required		| (true of false; default: false) Validation: require a non-empty string as a response.
pattern			| (text [supports regex]) Validation: require the response to match the regular expression set in pattern (takes either a string <code>"a&#124;b"</code> or a regular expression <code>/a&#124;b/</code>).
correct 		| (true or false; default: false) Validation: require the response to be correct (set the target value using `correctValue`)
correctValue 	| (*) Set the correct response value for the correct validation.
errorMsg		| (Object: {}) This object has a property for each validation type. Setting the appropriate type changes the validation message. For instance setting the `required` property will change the validation message for instances where no response was given.


{{< playground filename=text.js >}}
define(['questAPI'], function(Quest){
    var API = new Quest();

    API.addSequence([
        { // page begins
            header: 'Text questions',
            questions: [
                { // question begins
                    type: 'text',
                    stem: 'When you say good morning, what do you mean?',
                    required: true,
                    errorMsg: {
                        required: 'This question is truly important to us, please take your time to answer.'
                    }

                } // question ends
            ]
        } // page ends

    ]);

    return API.script;
});
{{< /playground >}}

The following properties are supported only by `textarea`s:

property		| description
--------------- | ---------------------
rows 			| The number of visible text lines.
columns 		| The visible width of the textarea, in average character widths (this setting overrides the width setting).

For example, this is a text question that requires a valid email address (although there are better *patterns* out there for this purpose):

```javascript
var quest = {
	stem: "Please type your email address",
	dflt: "my@email.com",
	required: true,
	pattern: /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm,
	errorMsg: {
		required: "You must enter a valid email address.",
		pattern: "This is not a valid email address"
	}
}
```

An example for a textarea question.
It allows you to input some text. In particular it is good for larger amounts of text as it allows better control of the text area size.
In this case, we use a text area 3 rows deep and require at least 80 characters of text.

{{< playground filename=textarea.js >}}
define(['questAPI'], function(Quest){
    var API = new Quest();

    API.addSequence([
        { // page begins
            header: 'Text questions',
            questions: [
                { // question begins
                    type: 'textarea',
                    stem: 'When you say good morning, what do you mean?',
                    rows: 3,
                    minLength: 400
                } // question ends
            ]
        } // page ends

    ]);

    return API.script;
});
{{< /playground >}}
