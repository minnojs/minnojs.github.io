---
title: Data
weight: 20
description: How minno-quest stores data
---

miQuest keeps record of user responses using plain js objects.
These objects are both kept locally and sent to the server.

Localy, the data logs are available as properties of the `questions` object  in [`current`]({{< relref "/docs/sequencer/variables/current">}}):

```javascript
current.questions = {
	questionName1 : {...}, // log object
	questionName2 : {...} // log object
}
```

Following are the properties of the logged object:

Property 		| Description
----------- 	| -----------
name 			| The `name` of the question.
response 		| The actual response for this question. This may be a string, a number or even an array.
declined 		| Whether or not the question was declined (if a question was declined, the response field will be undefined).
latency 		| The time (from question presentation) to the last change of this response.
submitLatency	| The time (from question presentation) to the time this page was submitted.

The response for questionName1 can be accessed using `current.questions.questionName1.response`. 
You can use this data within [templates]({{< relref "/docs/sequencer/templates">}})
or from within [branches]({{< relref "/docs/sequencer/mixer#conditions">}}).
