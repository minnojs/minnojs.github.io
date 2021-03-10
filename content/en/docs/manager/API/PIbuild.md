---
title: Project Implicit Build
description: Project-implicit unique behaviour (you can probably use it too!)
---

#### mTurk

The project implicit build has a feature for integration with mTurk.
All you have to do is add The following code to your project, replacing the `<id#>` tags with the appropriate data of course.
The player will redirect the users back to mTurk immediately after the final task in the manager (as defined by the `last` property).
Setting the `isProduction` property allows you to switch between the development and production urls for mTurk.

```javascript
API.addGlobal({
    $mTurk: {
        assignmentId:'<id#>',
        hitId:'<id#>',
        workerId:'<id#>',
        isProduction: true
    }
});
```
