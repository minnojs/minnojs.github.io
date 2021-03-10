---
title: Data
weight: 20
description: How minno-time stores data
---

The player sends all the data it has gathered to the url defined in the settings [logger](../api/settings#logger).

Logs are accumulated in an array (which can be found in `current.logs` or `API.getLogs`).
Each log is an object including the following fields:


Field           | Description
--------------- |---
log_serial      | the serial number for this log row (starts at 1)
trial_id        | a unique identifier for this trial
name            | the name of this trial - an alias if one is set, otherwise the set the trial inherited
block           | the block attribute of trial.data (it is up to the user to set this attribute, usually in the trial definitions)
responseHandle  | the handle for the input that triggered this log
score           | the score attribute of trial.data (it is up to the user to set this attribute, usually using setTrialAttr)
latency         | the latency of the response from the beginning of the trial
stimuli         | a json including the stimuli used in this trial (we use an alias if one is set, otherwise the stimulus set, otherwise the stimulus handle otherwise stim#)
media           | a json including the media used in this trial (we use an alias if one is set, otherwise the media set, otherwise media#)
data            | a json including the data property of this trial

You can control the names that the different elements get by adding an `alias` property to the element itslef or to its `data`.
If the `alias` isn't set, then the player attempts to choose a meaningful name on its own (using the inherited set, or whatever is appropriate).
