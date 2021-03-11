---
title: Slide show
description: Create a simple slide show with minno-time. Learn the basics of inheritance.
---

This section of the tutorial will walk you through creating a slide show. We will create a simple task that displays a series of stimuli. 
In this tutorial we will learn how to utilize the sequence, and the very basics of inheritance.

## A simple slide show
Tasks normally include more than one trial. 
The sequence holds an array: the trials in the array will be activated sequentially.

This is the trial that we already know from the [*Hello world*](../hello) tutorial:

```javascript
{
	input: [{handle:'space',on:'space'}],
	layout: [{
		media :{word:'Hello world'},
		css:{fontSize:'2em',color:'#D7685A'}
	}],
	interactions: [{
		conditions: [{type:'inputEquals',value:'space'}],
		actions: [{type:'endTrial'}]
	}]
}
```

We will now duplicate this trial a few times for a simple slide show.
You should try it out. Try adding another trial. Try changing the media or style of the stimuli.
Use the [docs](/docs/time/api)!

{{< playground filename=slideshow1.js >}}
define(['timeAPI'], function(APIconstructor) {

	var API = new APIconstructor();

    API.addSequence([
        {
            input: [{handle:'space',on:'space'}],
            layout: [{
                media :{word:'Is\'nt'},
                css:{fontSize:'2em',color:'#D7685A'}
            }],
            interactions: [{
                conditions: [{type:'inputEquals',value:'space'}],
                actions: [{type:'endTrial'}]
            }]
        },
        {
            input: [{handle:'space',on:'space'}],
            layout: [{
                media :{word:'this'},
                css:{fontSize:'2em',color:'#D7685A'}
            }],
            interactions: [{
                conditions: [{type:'inputEquals',value:'space'}],
                actions: [{type:'endTrial'}]
            }]
        },
        {
            input: [{handle:'space',on:'space'}],
            layout: [{
                media :{word:'cool?'},
                css:{fontSize:'2em',color:'#D7685A'}
            }],
            interactions: [{
                conditions: [{type:'inputEquals',value:'space'}],
                actions: [{type:'endTrial'}]
            }]
        }
    ]);
	return API.script;
}); 
{{< /playground >}}

## Basic inheritance
Our task is becoming longer and harder to maintain.
Imagine a slide show with 50 slides, it will need more than 500 lines of code. 
If we would want to make any changes that apply to all the trials (e.g., increase the font size), we will have to go through each trial individually and make the same change. 
This is where the concept of inheritance comes in. 
Inheritance allows you to create a prototype of a trial (or stimulus or media object), and re-use it whenever you want. 
To understand how this works, we need to first learn a bit about sets.

### Sets
A [set](/docs/sequencer/inheritance#sets) is a list of one or more miTime objects (trials, stimuli or media objects).
After defining a set of objects (e.g., trials), we can re-use those objects. 
Therefore, if we want to create a basic trial and re-use it a few times, we create a one-trial set, and then re-use it in a sequence. 
We will focus here on trial sets, but everything that applies to the trials sets also applies to stimuli sets or media sets as well.

We create trial sets using the `API.addTrialSets()` function.
The simplest use of the function involves two arguments; the first is the set name, and the second is an array of objects to add to the set. 
The following code creates a trial set called *slide* and populates it with one trial: our "Hello world" trial.

```javascript
API.addTrialSets('slide',[{
	input: [{handle:'space',on:'space'}],
	layout: [{media :{word:'Hello world'}}],
	interactions: [{
		conditions: [{type:'inputEquals',value:'space'}],
		actions: [{type:'endTrial'}]
	}]
}])
```

Now, we can refer to this trial in the future with the name we gave it ('slide'), and re-use it over and over again in a sequence. 
We re-use trials (and media and stimulus objects) using inheritance.

#### **Inheritance**
Inheritance allows us to re-use trials: new trials can be created by inheriting a trial from a set. If there is only one trial in the set, we simply inherit the whole set.

Trials (and stimuli and media too) have a special property called [inherit](/docs/sequencer/inheritance#syntax) that allows them to specify a specific set to inherit from. 
This allows trials to be significantly shorter. 
The following code activates our slide three times:

```javascript
API.addSequence([ //Our sequence is an array of trials.
	{inherit:'slide'}, //Each object is a trial. 
	{inherit:'slide'},
	{inherit:'slide'}
]);
```
This sequence will present the Hello World trial three times, one after the other.

### Extending
But repeating slides is pretty boring.
Our slideshow should display different text in each trial.
So, blind inheritance is not enough for us, we need also to extend each trial.

When we inherit a trial, we can extend it by simply adding properties or overriding existing ones.
Let's call the trial that inherits a `child`, and the trial that is inherited a `parent`. 
A child inherits all of its parent's properties. Any property that is added to it overrides the parent's properties.

For example, let's say the following object resides in the "parent" set.

```javascript
{
	family: 'Smith'
}
```

Simply inheriting it will result in an identical copy. But we can go one step further and extend it by adding an additional property; in this case - *name*:

```javascript
{
	inherit:'parent',
	name: 'John'
}
```

This extends the object which becomes:

```javascript
{
	family: 'Smith',
	name: 'John'
}
```

Going back to our example, we can now extend each of the slides to display different text by copying all the basic trial's properties, and only overriding the layout object:

```javascript
API.addSequence([
	{
		inherit:'slide',
		layout: [{media :{word:'This'}}]
	},
	{
		inherit:'slide',
		layout: [{media :{word:'is'}}]
	},
	{
		inherit:'slide',
		layout: [{media :{word:'even'}}]
	},
	{
		inherit:'slide',
		layout: [{media :{word:'Cooler!!'}}]
	}
]);
```


{{< playground filename=slideshow2.js >}}
define(['timeAPI'], function(APIconstructor) {

	var API = new APIconstructor();

	// Create a trial set with the hello world trial
	API.addTrialSets('slide',[{
		input: [{handle:'space',on:'space'}],
        layout: [{media :{word:'Hello world'}}],
		interactions: [{
			conditions: [{type:'inputEquals',value:'space'}],
			actions: [{type:'endTrial'}]
		}]
	}]);

	// Create the sequence (Each trial extends the slide and overwrites the layout property)
	API.addSequence([
		{
			inherit:'slide',
			layout: [{media :{word:'This'}}]
		},
		{
			inherit:'slide',
			layout: [{media :{word:'is'}}]
		},
		{
			inherit:'slide',
			layout: [{media :{word:'even'}}]
		},
		{
			inherit:'slide',
			layout: [{media :{word:'Cooler!!'}}]
		}
	]);

	return API.script;
});
{{< /playground >}}

#### **Defaults**
Let's take this one step further. What if we want to centralize the way stimuli look? Let's use inheritance to control that too. First, we create the basic stimulus (we'll call it 'default'):

```javascript
API.addStimulusSets('default',[
	{css:{fontSize:'2em',color:'#D7685A'}}
]);
```

Then, when we create the stimulus object for the layout in each trial, that stimulus can inherit from our 'default' stimulus:

```javascript
API.addSequence([
	{
		inherit:'slide',
		layout: [{ inherit:'default', media :{word:'This'} }]
	}
]);
```

Note that the default stimulus had no media. 
It means that each stimulus that will inherit this stimulus will need to add a media object. 
We could have done the same thing with a basic slide trial: create a trial without any layout. 

```javascript
API.addTrialSets('slide',[{
	input: [{handle:'space',on:'space'}],
	interactions: [{
		conditions: [{type:'inputEquals',value:'space'}],
		actions: [{type:'endTrial'}]
	}]
}])
```

It means that each trial that will inherit 'slide' will need to add layout stimulus. 

Try this out for yourself. Can you add the default stimulus? Can you change it's appearance?
