---
title: multiGrid
description: >
    The multiGrid question allows you to group multiple questions into a single table. 
    This is often useful when you are asking a set of simple qustions repeatedly.
---

The response for this question is an array of responses corresponding to the columns of the grid, so that the first item in the array corresponds to the response in the first column and so on.

Property    	| Description
----------- 	| -----------
columns 		| An array of column descriptions. You can use a string here or a column object as described [below](#multigridcolumns).
rows 			| An array of row descriptions. You can use a string here or a row object as described [below](#multigridrows).
shuffle 		| Whether to randomize the order of the rows.
columnStemCss	| CSS object for *all* the column stems.
columnStemHide	| Hide the column stem row.
rowStemCss		| CSS object for the row stems.
rowStemHide 	| Hide the row stem column.
checkboxType	| Customize the type of checbox we use. `checkMark`: the default check style. `xMark`: use an X instead of the check. `colorMark`: fill the checkbox with a dark background.
cellLabels 		| Show the column label within the grid cells.
required        | Require all subquestions in the multigrid to be full

##### multiGrid.columns
If you set a string instead of a column object it will be treated as if you set only the stem and all other values will be set by default.

Property    | Description
----------- | -----------
stem 		| (text) The description of this column.
value 		| The value to set for this column checkboxes. Defaults to `true`.
type		| What type of interface should this column have (see below, defaults to checkbox)
css 		| CSS object for the whole column. This is the place that you can control the column width (using the `width` property).
stemCss		| CSS object for the column stem.
required    | Require all subquestions in the column to be full
pattern     | (text or [regular expression](http://www.regular-expressions.info/)) Require all subquestions in the column to match the pattern. This validation method only affects input type columns.

There are several column types at your disposal, 

Type        | Description
----------- | -----------
checkbox    | The default is "checkbox".
text        | Display text of you choice (use the `textProperty` property to set the row property that will be used as the text).  For example `{type: 'text', textProperty:'rightStem'}` will use the `rightStem` property of each row as the text content. You can use this option to present an empty cell by leaving the text empty.
dropdown    | Display a dropdown input. Use the `answers` property to set the options for the dropdown. For example `{type:'text', answers: ['Male', 'Female']}`. See the [dropdown](../dropdown) question for more `answers` options.
input       | Display a text input. Note that users can input responses that may be confused with other responses (if a user inputs a 1 it may be confused with a selection of a checkbox in the first column).

##### multiGrid.rows
If you set a string instead of a row object it will be treated as if you set only the stem and all other values will be set by default.

Property     | Description
----------- | -----------
stem 		| (text) The description of this row.
name 		| The name you want this row to be called within the `questions` object. If this is not set the grid automatically sets it according to the grid name. So that if grid.name is "myGrid" then you're first row will be called by default "myGrid001".
overwrite   | An array of column deffinitions to overwrite. Each element of the array overwrites the corresponding column column (so that the first element in the array overwrites the first column definitions and so on). If you do not want to overwrite a specific column, simply set it to `false`.
required    | Require all subquestions in the row to be full

Here is a simple example of using a multiGrid:

```javascript
var multiGrid = 	{
	type: 'multiGrid',
	name:'multiGrid',
	columns: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	rows: ['Days you work out', 'Days you go to work']
}
```

You can, of course have tighter control over the way things work:

```javascript
var grid = 	{
	type: 'multiGrid',
	name:'multiGrid',
	columns: [
		{stem:'Gender', type:'dropdown', answers: ['Male', 'Female']},
        'Study together',
        'Work together',
		{stem:'Description', type:'input'}
	],
	rows: ['Friend 1', 'Friend 2' ]
}
```

{{< playground filename=gridMulti.js >}}
define(['questAPI'], function(Quest){
    var API = new Quest();

    API.addSequence([
        { // page begins
            header: 'GridMulti questions simple',
            questions: [
                {
                    type: 'multiGrid',
                    name:'multiGrid1',
                    columns: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                    rows: ['Days you work out', 'Days you go to work']
                }
            ]
        }, // page ends
        { // page begins
            header: 'GridMulti questions advanced',
            questions: [
                {
                    type: 'multiGrid',
                    name:'multiGrid2',
                    columns: [
                        {stem:'Gender', type:'dropdown', answers: ['Male', 'Female']},
                        'Study together',
                        'Work together',
                        {stem:'Description', type:'input'}
                    ],
                    rows: ['Friend 1', 'Friend 2' ]
                }
            ]
        } // page ends
    ]);

    return API.script;
});
{{< /playground >}}
