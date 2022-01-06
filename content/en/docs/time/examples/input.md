---
title: input
description: input.js
---

{{< playground filename=input.js >}}
define(['timeAPI'], function(APIconstructor) {

	var API = new APIconstructor();

    // create html element for use in click example
	var htmlElement = document.createElement('div')
    htmlElement.innerHTML = 'Click Me';

	// ### input
	// The trial input attribute lists the input types that the player is familiar with.
	// Each input element must include both a handle and an on propery. </br>
	// The **handle** is the way we refer to this type of input inside the player (in the interaction section), it is basicly the name we give this input.
	// The **on** parameter describes the specific input that triggers this element.

	API.addSequence([
		// ##### Keypressed
		// The keypressed input takes an additional property: *key*.
		{
			input: [
				// Key can take single characters.
				{handle:'end',on:'keypressed', key:'i'},
				// Or key codes (69 is the key code for e).
				{handle:'end',on:'keypressed', key:69},
				// And even arrays
				{handle:'otherHandle',on:'keypressed', key:['i',69]}
			],
			layout: [{media :{word:'Click e or i to move on'}}],
			interactions: [
				{
					// This is where we tell the player to respond to the input.
					// More about this in the conditions tutorial.
					conditions: [{type:'inputEquals',value:'end'}],
					actions: [{type:'endTrial'}]
				}
			]
		},
		// There are several shortcuts for usefull keypresses that do not require the *key* paramater.
		{
			input: [
				// Space
				{handle:'end',on:'space'},
				// Enter
				{handle:'end',on:'enter'},
				// Escape
				{handle:'end',on:'esc'}
			],
			layout: [{media :{word:'Click enter escape or space to move on'}}],
			interactions: [
				{
					// This is where we tell the player to respond to the input.
					// More about this in the conditions tutorial.
					conditions: [{type:'inputEquals',value:'end'}],
					actions: [{type:'endTrial'}]
				}
			]
		},

		// ##### Click
		// React to a click on an element.
		// Takes either a class handle or an html element to present.
		// In case an element is defined it is presented when the input is activated.
		{
			input: [
				// **stimHandle** is used to indicate stimuli with the appropriate Handle (in this case "myStimulus").
				{handle:'end',on:'click',stimHandle:'myStimulus'},
				// **element** allows you to insert an html (or even jquery) element for this interaction
				{handle:'end',on:'click',element:htmlElement}
			],
			layout: [{data:{handle:'myStimulus'},media :{word:'Click me too!!'}, location:{bottom:30}}],
			interactions: [
				{
					// This is where we tell the player to respond to the input.
					// More about this in the conditions tutorial.
					conditions: [{type:'inputEquals',value:'end'}],
					actions: [{type:'endTrial'}]
				}
			]
		},

		// ##### Timeout
		// React after a set time.
		// Takes a duration property in miliseconds. </br>
		// This input is especialy usefell together with the removeInput action. (see the actions tutorial)
		{
			input: [
				// This trial will end after five seconds.
				{handle:'end', on: 'timeout', duration: 3000}
			],
			layout: [{media :{word:'Wait just five seconds'}}],
			interactions: [
				{
					// This is where we tell the player to respond to the input.
					// More about this in the conditions tutorial.
					conditions: [{type:'inputEquals',value:'end'}],
					actions: [{type:'endTrial'}]
				}
			]
		},
		
		{
			input: [
                // This is an idiom for creating a custom input
                // It is quite advanced, so don't fret if you don't understand everything
                // The wrapper function allows us to keep a reference to the listener function
               (function(){
                    var $listener;

                    return {
                        handle: 'end',
                        // Setup input listener
                        on: function(inputObj, canvas, stream){
                            $listener = stream();
                            window.addEventListener('resize', $listener);
                            return $listener;
                        },
                        // clean listener (for removeInput actions, and end of trial)
                        off: function(){
                            window.removeEventListener('resize', $listener);
                        }
                    }   
                })()
			],
			layout: [{media :{word:'resize the screen'}}],
			interactions: [
				{
					conditions: [{type:'inputEquals',value:'end'}],
					actions: [{type:'endTrial'}]
				}
			]
			
		}
	]);

	return API.script;
});
{{< /playground >}}
