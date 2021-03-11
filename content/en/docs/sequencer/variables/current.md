---
title: Current
description: Serves as the context or state of the currently running task.
---

Each MinnoJS task creates an object that holds information regarding that task.
The object is automatically updated with data from within the tasks (such as question answers or other logs).
The task object can be changed manually as well.
You can extend it however you like using `API.addCurrent`:

```javascript
API.addCurrent({
    value: 123,
    variable: [1,2,3]
});
```

While a task is running, its task object is available as `current`.
Even when the task is not active it is available from within the [`global`](../global) object, as `global.<taskName>`, 
where `<taskName>` stands for the [task name](/docs/manager/api/tasks.md) as defined within the task manager.

For your convenience, here is a table describing some of the data available within the different task objects.

Task    | Description
------- | -----------
miTime  | The task object holds all trial logs: `current.logs`.
miQuest | The task object holds all questions: `current.questions`.

