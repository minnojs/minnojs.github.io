define(['managerAPI'], function(Manager){

    var API = new Manager();
	API.addSettings('skin','demo');

    API.addSequence([
        {
            type:'message', 
            template:'<br/><h1>Click space for examples of a self-esteem questionnaire and a Stroop task</h1>', keys: ' '
        }, 
        {
			type: 'quest', name: 'rosenberg', scriptUrl: 'rosenberg.js'
		},
        {
			type: 'pip', name: 'stroop', version: '0.3', scriptUrl: 'stroop.js'
		},
		{
            type:'message', template:'<br/><h1>Click space to finish the study</h1>', keys: ' '
        }
    ]);

    return API.script;
});
