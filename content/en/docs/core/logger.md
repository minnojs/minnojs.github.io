---
title: Advanced logging techniques
linkTitle: Logger
---

The logger controls the way(s) that you save the data your study collects.
You can define the logging method for any of your tasks (manager, time, and quest) within its settings.
If you do not define a logger for a task, it will default to the logger defined in your manager.

## Syntax

Folowing are the properties available for the logger:

property    | description 
----------- | -----------
url         | The url to send to. If it is not set, data will not be sent.
type        | The strategy to use for sending logs to the server. See options below.
pulse       | Allows you to post your data in pulses of "pulse" logs instead of all at the end of the task (Does not work for csv logger).
saveLocal   | Only for the csv logger: save data to participant computer as csv file.
fileName    | Only for the csv logger: set the file name for files save using `saveLocal`.

```javascript
API.addSettings('logger', {
    url: '/manager/data',
    type:'new',
    pulse: 20
});
```

By deafault the logger posts according to the Project Implicit server rules (old).
You can change the logging style by setting the logger `type` as follows:

type    | description
------- | -----------
old     | Uses the post strategy implemented by the old PI server
new     | Uses the post strategy implemented by the new server  
csv     | Posts all data as CSV at the end of the manager. If you are creating a manager that does not fully complete (for instance, when you have a message as your last page), use the [postCsv](/docs/manager/tasks/postcsv/) task in addition to settings the log type to csv.
debug   | Logs all posts to the console. Do not do this in production! These logs aren't posted to the server at all!

You can change the logging strategy or even create new strategies.
Doing this is rather advanced and is documented below.

## Advanced use

{{% alert title="Warning" color="warning" %}}
Following is a technical account of how the logger works.
It is useful for people interested in modifying existing loggers, or creating loggers for additional environments.
This description is fairly technical, and designed for advanced users only.
{{% /alert %}}

The logger is responsible for managing multiple streams of logs and allowing easy fine tuning of posting them to a server.
Each logger can create named log streams that can then be used to manage your data.

```javascript
import Logger from './logger';
const noop = function(){};
const settings = {
    onRow: (name, log) => console.log(log), 
    onEnd:()=>console.log('The end'), 
    serialize:noop, 
    send:noop
};

const logger = Logger(settings);
const managerLog = logger.createLog('manager');

managerLog('first log'); // logs 'first log'
managerLog('second log'); // logs 'second log'
managerLog.end(true); // logs 'The end'
```

The raw logger takes a settings object with four properties:

Property    | Signature                                             | Descritpion
----------- | ----------------------------------------------------- | -----------
onRow       | (logName, log, settings, ctx) => Any&#124;undefined   | Maps over the log stream, return any value in order to pass it to `serialize`.
onEnd       | (logName, settings, ctx) => Any&#124;undefined        | Gets called when a stream ends, return any value in order to pass it to `serialize`.
serialize   | (logName, logs, settings, ctx) => Any                 | Transforms the logs returned by onRow/onEnd before sending them
send        | (logName, serialized, settings, ctx) => void          | Sends serialized data to server (or whatever...)

The arguments for the logging functions are as follows:

Argument                | Description
----------------------- | -----------
logName                 | The name for this log group - the name of the task producing these logs.
log/logs/serialized     | The data piped down to this function.
settings                | The settings object + some meta data. See below for some additional details.
ctx                     | The context object of the logger. You can assign any values you like into it. This is a good place to keep state across logging actions.

 * The settings object here is rather dynamic. It is composed of 
 (a) The defalut settings as defined by the `type` settings. 
 (b) The manager logger settings. 
 (c) The task logger settings.
 (d) If the log was created by API.save `settings.isManual` is set to true.
 (e) The task type is set into `settings.is<Type>` so that quest tasks will have `settings.isQuest` set to true.
