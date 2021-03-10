---
title: Interactions
weight: 20
description: Creating interactivity
---

This is where you will have to carefully describe exactly what you want MinnoJS to *do*.
You can treat it as a set of if-then pairs that drive the trial.
Each interaction is composed of [conditions](../conditions) and [actions](../actions).
For example, you can define an interaction so that "**if** the space key is pressed" (condition), "**then** display target stimulus" (action).
Or another one so that "**if** a timer triggers" (condition), "**then** end the trial" (action).

Each trial has an array with one or more `interactions`.
It MUST have at least one interaction, otherwise it will never complete.
The array can look something like the following:

```javascript
{
    interactions: [
        interaction1,
        interaction2
    ]
}
```

Each individual interaction is an object with two properties: `conditions` and `actions`.
[`conditions`](../conditions) are a set of propositions that have to *all* be true in order for respective set of [`actions`](../actions) to be executed.

```javascript
{
    conditions: [
        condition1,
        condition2
    ],
    actions: [
        action1,
        action2
    ]
}
```
