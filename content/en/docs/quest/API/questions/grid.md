---
title: Grid
description: >
    The grid question allows you to group multiple "multiple choice" questions into a single table.
    This is often useful when asking several likert type questions using the same scale.
---

The grid question itself keeps track of the sum of the row questions (excluding any questions that have non-number values).

Property    	| Description
----------- 	| -----------
columns 		| An array of column descriptions. You can use a string here or a column object as described [below](#gridcolumns).
rows 			| An array of row descriptions. You can use a string here or a row object as described [below](#gridrows).
shuffle 		| Whether to randomize the order of the rows.
required 		| Require the user to respond to all rows (true or false).
columnStemCss	| CSS object for *all* the column stems.
columnStemHide	| Hide the column stem row.
rowStemCss		| CSS object for the row stems.
rowStemHide 	| Hide the row stem column.
checkboxType	| Customize the type of checbox we use. `checkMark`: the default check style. `xMark`: use an X instead of the check. `colorMark`: fill the checkbox with a dark background.
cellLabels 		| (true or false) Wether to show the column label within the grid cells.

# grid.columns
If you set a string instead of a column object it will be treated as if you set only the stem and all other values will be set by default.

Property    | Description
----------- | -----------
stem 		| (text) The description of this column.
value 		| The value to set for this column. Defaults to the number of the column (starting from 1, so that the response for choosing the third column is 3).
noReverse 	| When reversing row values, ignore this column (it will retain its normal value).
type		| What type of interface should this column have. 
css 		| CSS object for the whole column. This is the place that you can control the column width (using the `width` property).
stemCss		| CSS object for the column stem.

There are several column types at your disposal, 

Type        | Description
----------- | -----------
checkbox    | The default is "checkbox".
text        | Display text of you choice (use the `textProperty` property to set the row property that will be used as the text).  For example `{type: 'text', textProperty:'rightStem'}` will use the `rightStem` property of each row as the text content.
dropdown    | Display a dropdown input. Use the `answers` property to set the options for the dropdown. For example `{type:'text', answers: ['Male', 'Female']}`. See the [dropdown](../dropdown) question for more `answers` options.
input       | Display a text input. Note that users can input responses that may be confused with other responses (if a user inputs a 1 it may be confused with a selection of a checkbox in the first column).

# grid.rows
If you set a string instead of a row object it will be treated as if you set only the stem and all other values will be set by default.

Property     | Description
----------- | -----------
stem 		| (text) The description of this column.
name 		| The name you want this row to be called within the `questions` object. If this is not set the grid automatically sets it according to the grid name. So that if grid.name is "myGrid" then you're first row will be called by default "myGrid001".
reverse 	| When calculating the default value for this row, should we reverse the order of columns (high to low and vise versa).
required 	| Require the user to respond to this row (this property is redundant if you've already set main questions required property to true).
overwrite   | An array of column deffinitions to overwrite. Each element of the array overwrites the corresponding column column (so that the first element in the array overwrites the first column definitions and so on). If you do not want to overwrite a specific column, simply set it to `false`.

Here is a simple example of using a grid:

```javascript
var grid = 	{
	type: 'grid',
	name:'grid',
	columns: ['Strongly agree' , 'agree' , 'don\'t know' , 'disagree' , 'Strongly disagree'],
	rows: ['I like grids', 'I like bananas too']
}
```

You can, of course have tighter control over the way things work:

```javascript
var grid = 	{
	type: 'grid',
	name:'grid',
	columns: [
		'Strongly agree',
		'agree',
		'don\'t know',
		'disagree',
		'Strongly disagree',
		{stem:'Decline to answer', value:'n/a', noReverse:true}
	],
	rows: [
		{stem:'I like grids',name:'likeGrids'},
		// This questions scores will be reversed so that the sum of scores is meaningful 
		{stem:'I hate bananas', name:'likeBananas', reverse:true},

        // Allow only the extreme responses and declining to answer for this row only
		{stem:'Only extremes', name:'extremes', overwrite:[false, {type:'text'}, {type:'text'}, {type:'text'}, false, false]}
	]
}
```

{{< playground filename=grid.js  >}}
define(['questAPI'], function(Quest){
    var API = new Quest();

    API.addSequence([
        { // page begins
            header: 'Grid questions simple',
            questions: [
                {
                    type: 'grid',
                    stem: 'What sort of things do you like?',
                    columns: ['Strongly agree' , 'agree' , 'don\'t know' , 'disagree' , 'Strongly disagree'],
                    rows: ['I like grids', 'I like bannanas too']
                }
            ]
        }, // page ends
        { // page begins
            header: 'Grid questions advanced',
            questions: [
                {
                    type: 'grid',
                    name:'grid',
                    columns: [
                        'Strongly agree',
                        'agree',
                        'don\'t know',
                        'disagree',
                        'Strongly disagree',
                        {stem:'Decline to answer', value:'n/a', noReverse:true}
                    ],
                    rows: [
                        {stem:'I like grids',name:'likeGrids'},
                        // This questions scores will be reversed so that the sum of scores is meaningful
                        {stem:'I hate bananas', name:'likeBananas', reverse:true}
                    ]
                }
            ]
        } // page ends
    ]);

    return API.script;
});
{{< /playground >}}
