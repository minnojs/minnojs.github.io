---
title: Global
description: The global variable serves as the state of your whole study.
---

The PI tasks expose one central object that serves as the hub of all of you tasks.
The [task objects][../current] get automatically registered on the `global` object, so that you can access them all from here.
In addition, you can register any data that you want shared between your tasks onto `global`.
This options is useful in various cases of branching, as well as when you want a common theme to appear in multiple tasks.

The following snippet sets `global.value` to 123, and `global.variable` to [1,2,3].

```javascript
API.addGlobal({
    value: 123,
    variable: [1,2,3]
})
```

{{< playground filename=templateGlobal.md >}}
// You can use data set within the global (or for that matter current) object from within templates.
define(['managerAPI'], function(Manager){

  var API = new Manager();

  // Set a value in global
  API.addGlobal({foo:'using global in templates'});

  API.addSequence([
  	{
  		type:'message',
  		keys: ' ',
        template:'foo is equal to  "<%= global.foo %>".'
  	}
  ]);

  return API.script;
});
{{< /playground >}}

It may sometimes be handy to access `global` directly as `window.piGlobal`.
Note that this allows you to access task objects ([current](../current)) as well.

```javascript
window.piGlobal.greeting = 'Hello world';
console.log(window.piGlobal);
```

## Special properties
There are several properties within `global` that have a special meaning.

### Meta
The `global.$meta` variable has a special meaning within the player.
Each time the logger triggers within any of the manager tasks, all the data with then `global.$meta` object is added to each row of the log.

The following definition will cause each log posted to the server to include `uid`:

```
API.addGlobal({
    $meta: {uid: '12345678'}
});
```

### postOnce
The `global.$postOnce` variable is posted to the server immidiately at the start of the task sequence.
Note that any changes to this variable during the sequence will have no effect.

The following definition will cause the `condition` to be saved to the server at the begining of the session.

```
API.addGlobal({
    $postOnce: {condition: 'long'}
});
```

### Url
The [query string](https://en.wikipedia.org/wiki/Query_string) is a set of parameters that can be passed within a URL string.
The global object exposes the url query string in a dedicated object called `$url`.

So that if you have a url such as `example.com?bar=buz&bam=bif` the object takes the following form:

```javascript
global.$url == {
    bar: 'buz',
    bam: 'bif'
}
```

