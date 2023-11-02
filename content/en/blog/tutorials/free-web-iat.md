---
layout: post
title: Running Project Implicit’s IAT on your own
author: yoav_bar_anan
---

[Project Implicit](http://projectimplicit.net/) has developed [MinnoJS](https://minnojs.github.io/) to program web studies. 
The main instrument that we use in Project Implicit is the Implicit Association Test (IAT). 
The IAT is a commonly used indirect measure of social cognition (read more about such measures [here](https://www.tau.ac.il/~baranan/imp.html)). 
If you reached this blog post, you probably know what the IAT is and you want to use it in your own study. In this blog post, I will explain how you can run a web study with an IAT and a questionnaire using MinnoJS. 

### Overview

In short, you need to:
1. Copy an [example](https://github.com/baranan/minno-tasks/tree/master/docs/studies/datapipe.example.iat) of a MinnoJS IAT study into your directory on a satatic web server. For example, you can create a [github](https://github.com/) account for free and post your files on [Github Pages](https://docs.github.com/en/pages).
2. Create an [OSF account](https://osf.io/).
3. Create a [DataPipe](https://pipe.jspsych.org/) account in order to save your study data directly on the OSF.
4. In the manager file (e.g., [this](https://github.com/baranan/minno-tasks/blob/master/docs/studies/datapipe.example.iat/mgr.js), if you copied my example), replace the DATAPIPETOKEN with your datapipe token. 

### MinnoJS

[MinnoJS](https://minnojs.github.io/) is a JavaScript framework for programming web studies. 
It supports questionnaires and reaction-time tasks. 
It is free to use, and it has a [Google Forum](https://groups.google.com/g/minnojs/?pli=1) that might help, if you have programming questions. 
For a simple IAT study, you do not need to know how to program MinnoJS studies, and you can probably do this on your own. You just need to copy one of our example studies, 
and insert your DataPipe token in the right place (see below), to allow saving the data in your OSF account.

If you want to hire someone to help you out, you can contact [me](mailto:baranan@tauex.tau.ac.il).

### Using DataPipe

DataPipe is a service that was developed to allow saving data directly into the OSF. 
There are some steps you need to follow in your OSF account and your DataPipe account, in order to create a token that MinnoJS can use to save your study data. [DataPipe](https://pipe.jspsych.org/) explains all of that. 
DataPipe will provide you a token that you are supposed to use in a JavaScript script in order to save the data directly on the OSF. We already wrote that JavaScript file, 
so all that we need from you is the token provided by DataPipe. 
You provide that code in the following line of code, in your [mgr.js](https://github.com/baranan/minno-tasks/blob/master/docs/studies/datapipe.example.iat/mgr.js) file:

```js
init_data_pipe(API, 'YOURDATAPIPETOKENGOESHERE', 'csv'); 
```

### Project Implicit's MinnoJS IAT extension 

In the example, the [raceiat.js](https://github.com/baranan/minno-tasks/blob/master/docs/studies/datapipe.example.iat/raceiat.js) file is the script that defines the IAT. 
That script uses a MinnoJS [IAT extension script](https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/iat10.js) that I programmed for Project Implicit. 

The script that we created for building IATs is an extension, implemented as a function that creates an IAT from a few arguments (i.e., parameters) that the researcher defines. 
You can read more about the basic idea of using extensions in Minno on [this page](https://github.com/baranan/minno-tasks/blob/master/implicitmeasures.md).

**IMPORTANT NOTE:** to skip blocks when you’re testing the IAT, use the key combination: Esc, Enter.

### How we define the IAT

In [our example study](https://github.com/baranan/minno-tasks/blob/master/docs/studies/datapipe.example.iat), we define an IAT in the file [raceiat.js](https://github.com/baranan/minno-tasks/blob/master/docs/studies/datapipe.example.iat/raceiat.js):

```js
define(['pipAPI','https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/iat10.js'], function(APIConstructor, iatExtension){
    let API = new APIConstructor();
    let global = API.getGlobal();

    return iatExtension({
        category1 : {
            name : global.blackLabels, //Will appear in the data.
            title : {
                media : {word : global.blackLabels}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {image: 'bm1_nc.jpg'},
                {image: 'bm2_nc.jpg'},
                {image: 'bm3_nc.jpg'},
                {image: 'bf1_nc.jpg'},
                {image: 'bf2_nc.jpg'},                 
                {image: 'bf3_nc.jpg'}     
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },    
        category2 : {
            name : global.whiteLabels, //Will appear in the data.
            title : {
                media : {word : global.whiteLabels}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {image: 'wm1_nc.jpg'},
                {image: 'wm2_nc.jpg'},
                {image: 'wm3_nc.jpg'},
                {image: 'wf1_nc.jpg'},
                {image: 'wf2_nc.jpg'},
                {image: 'wf3_nc.jpg'}
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },
        attribute1 : {
            name : 'Bad words',
            title : {
                media : {word : 'Bad words'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: global.negWords[0]},
                {word: global.negWords[1]},
                {word: global.negWords[2]},
                {word: global.negWords[3]},
                {word: global.negWords[4]},
                {word: global.negWords[5]},
                {word: global.negWords[6]},
                {word: global.negWords[7]}
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },
        attribute2 : {
            name : 'Good words',
            title : {
                media : {word : 'Good words'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: global.posWords[0]},
                {word: global.posWords[1]},
                {word: global.posWords[2]},
                {word: global.posWords[3]},
                {word: global.posWords[4]},
                {word: global.posWords[5]},
                {word: global.posWords[6]},
                {word: global.posWords[7]}
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },
        base_url : {//Where are your images at?
            image : global.baseURL
        },
        isTouch : global.$isTouch
    });
});
```

In the first line, we tell Minno where the [full IAT script](https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/iat10.js) is:<br/>
`define(['pipAPI','https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/iat10.js'], function(APIConstructor, iatExtension){`

At the beginning of [that script](https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/iat10.js), 
you can see all the possible arguments (i.e., parameters for the IAT). 
The arguments are provided in a JavaScript [JSON](https://www.w3schools.com/js/js_json.asp) object. 
If you don’t want to change the default value of an argument, you don’t need to include that argument in your own script.
If you change even one parameter within a child object (i.e., within a property that is an object, such as the property *category2*), you must define the whole object in your own code (as we did with category1 and category2 in the example above). 
The only parameters that we changed in the example above are the categories, the attributes (labels and stimuli), the "isTouch" arguments that define whether this task currently runs on a touch-device, and the url for the folder that hosts the images. 

Note that in the example, when we defined the stimulus words for the attribute categories, we used some code in order to get them (e.g., `word: global.posWords[6]`) from a previous step of this study. If you want to change the words, you can simply write them directly in that file. For example:
```js
            stimulusMedia : [ 
                {word: 'Fantastic',
                {word: 'Great',
                {word: 'Positive',
                {word: 'Pleasant',
                {word: 'Nice'
            ],
```

We used more complicated code for the attribute stimuli (e.g., `word: global.posWords[6]`) because we randomly select the attribute words from a larger pool of words, as recommended by [Axt et al. (2021)](https://doi.org/10.3758/s13428-021-01592-8).

To change your code to build the IAT you need. If you’re using photos, put them in your own directory and change your IAT script to search for images there: `base_url: {image:’YOUR URL GOES HERE’}`.
If you’re using words rather than photos, you need to update the [media](https://minnojs.github.io/minno-time/0.5/time/API.html#media) object of the categories. For instance: `{word: 'Tyrone'}.`

If you want to update the attributes, see how the attributes are defined in the [extension script](https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/iat10.js) and override them by defining your own attributes in your IAT script.

Although our IAT script supports touch devices, the IAT does not detect automatically whether the participant is using a touch device (e.g., mobile). Therefore, if you want your participants to run the IAT on a mobile device or a tablet, it might be best to an IAT version specifically for those participants (in your script, set isTouch:true in the IAT parameters). 
This is not what we have done in the example study. Rather, in the example study, we use Minno's internal detection at the beginning of the study, in the [manager file](https://github.com/baranan/minno-tasks/blob/master/docs/studies/datapipe.example.iat/mgr.js) in the following line:<br/>

`{ type: 'isTouch' }, //Use Minno's internal touch detection mechanism. `

### Processing the IAT data

The data will be saved under your OSF project, based on the information you provided in the DataPipe website. 
There will be a separate file for each task in the study, for each participant. The participant is identifed by session_id. The session_id is a part of the file name and it is also saved on each row of each data file.

If you want an example how to analyze the data from the [example study](https://github.com/baranan/minno-tasks/tree/master/docs/studies/datapipe.example.iat), you can download [this R script](https://github.com/baranan/minno-tasks/blob/master/docs/studies/datapipe.data.analysis/iat.data.analysis.rmd).

### Using Project Implicit's IATs

We posted [online](https://github.com/baranan/minno-tasks/blob/master/docs/studies/datapipe.iat.examples), many of Project Implicit's IATs. 

You can duplicate them to your own server, or just call them directly from your own study. That is, when you define the IAT in your manager file, you can use the full url of the IAT you want to use:<br/>

```js
        iat: [{
            type: 'time',
            name: 'iat',
            scriptUrl: 'https://github.com/baranan/minno-tasks/blob/master/docs/studies/datapipe.iat.examples/demo.iats/careeriat.js'
        }],
```

A couple of notes about these IATs:
* In the evaluative IATs, for each participant, we randomly choose eight positive and eight negative attribute words from a sets of 48 positive and 48 negativewords, based on Axt et al. (2021). 
* In the Sexuality IAT, for each participant, we randomly choose whether the Gay category would refer to women or men, or both. When you process the data, to know which IAT each  participant completed, use the stimuli in the IAT data.

### Launching from another platform

Probably, you will launch your study from a platform that is accessible to your participants (e.g., a Sona website, MTurk, Prolific). The relevant URL is the address of the html file. For example, the exampleiat.html (https://github.com/baranan/minno-tasks/blob/master/docs/studies/datapipe.example.iat/exampleiat.html) in the example study. But, remember to provide the URL that shows the file, not it code. For example, `https://baranan.github.io/minno-tasks/studies/datapipe.example.iat/exampleiat.html` is the URL for my example. 

At the end of the study, you might want to redirect your participants back to the platform. For example, [this study](https://github.com/baranan/minno-tasks/tree/master/docs/studies/datapipe.iat.examples/prolific.iat) redirects participants back to Prolific. 
The relevant code for the redirection is in the [manager file](https://github.com/baranan/minno-tasks/tree/master/docs/studies/datapipe.iat.examples/prolific.iat/mgr.js):

```js
        redirect:
        [{
            //At the end of the url, insert your Prolific study code
            type:'redirect', name:'redirecting', url: 'https://app.prolific.co/submissions/complete?cc=YOURPROLIFICCODE' 
        }]
```

This code defines a task that redirects participant to the specified URL. That task is added to the end of the sequence in this line:<br/>
`{inherit: 'redirect'}`

### Presenting a feedback to the participant 

In Project Implicit, for eductional purpopses, at the end of many of our studies, participants see the common interpertation of their IAT result.  In experiments in other settings (e.g., in the lab), I usually don't do that. When we present feedback in Project Implicit's website, we provide much context to the participant, to make sure they don't think that the feedback is more than an educational tool. The IAT (like all the other "implicit measures") is not accurate enough to provide a reliable estimate of attitudes for each participant. Therefore, I strongly recommend not to present feedback to your participants. 

If really must present feedback, then you can use [this example](https://github.com/baranan/minno-tasks/tree/master/docs/studies/datapipe.iat.examples/show.iat.feedback), which shows how to do that. The relevant code appears in the file [lastpage.showresults.jst](https://github.com/baranan/minno-tasks/blob/master/docs/studies/datapipe.iat.examples/show.iat.feedback/lastpage.showresults.jst).

### Any questions?

If you have any questions, you post questions in our MinnoJS Google Group, [here](https://groups.google.com/forum/?utm_medium=email&utm_source=footer#!forum/minnojs). 

### Cite Us

You used MinnoJS platform, which is cited like this:

`Zlotnick, E., Dzikiewicz, A. J., & Bar-Anan, Y. (2015). Minno.js (Version 0.3) [Computer software].`

To cite our Qualtrics-IAT script, cite this blog post:

`Bar-Anan, Y. (2023, November 2nd). Free Web IAT [Blog post]. Retrieved from https://minnojs.github.io/minnojs-blog/free-iat/`
