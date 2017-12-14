### What is Minno?

Minno is a free tool for creating web studies with sophisticated questionnaires
and reaction time tasks. It supports all major web browsers. Minno scripts are
easy to write, without previous knowledge in programming. Minno has been
developed by [Project Implicit](http://projectimplicit.net/about.html) for
running social cognitive experiments online. On Project Implicit's
[website](http://implicit.harvard.edu/implicit), studies developed with Minno.js
collect data from thousands of participants every day.

### How to cite

> Zlotnick, E., Dzikiewicz, A. J., & Bar-Anan, Y. (2015). Minno.js (Version 0.3)
> [Computer software].

### miQuest: questionnaires

miQuest builds and runs questionnaires. It runs a sequence of pages, each with a
sequence of questions. miQuest supports open-ended questions, multiple-choice
questions, grids, sliders (visual analog scale), and ranking. It supports
various mechanisms for question randomization, and for selecting questions based
on previous user response and experimental conditions. [Read
more](/minno-quest/0.1/quest/overview.html).

Below is a "Minno.js playground" with a simple example for a questionnaire (you can edit the code and see what changes).

<section id="quest">
    <div class="buttons"><a class="activate-button">Activate</a></div>
    <div class="editor">[quest]</div>
</section>

### miTime: reaction time tasks

miTime builds and runs tasks typical for cognitive psychology (reaction-time
tasks). miTime runs a sequence of trials, and supports various mechanisms for
randomization of trials and stimuli. Each trial describes a sequence of events
(mostly, stimulus presentation and keyboard and mouse responses). Because
Minno.js is JavaScript-based and does not require any installation on the
participant's computer, time-precision is often inferior to the precision
typically achieved with common tools for lab studies. From our experience,
experiments with Minno-Time obtain results similar to those obtained with lab
experiments. However, it is nearly impossible to guarantee that timing was 100%
accurate for all participants in all trials. For example, assuring subliminal
presentation of stimuli is unlikely. MiTime accepts mouse and keyboard input,
supports presentation of images and text, and is compatible with all major
browsers. [Read more](/minno-time/0.3/time/overview.html).

Below is a "Minno.js playground" with a simple example for a Stroop task  (you can edit the code and see what changes).

<section id="time">
    <div class="buttons"><a class="activate-button">Activate</a></div>
    <div class="editor">[time]</div>
</section>

### miManager: studies with multiple tasks 

Manager presents a sequence of tasks (mostly, questionnaires, reaction-time
tasks, and instruction pages). It supports various mechanisms for randomization,
and for selecting tasks based on previous user response and on experimental
conditions. [Read more](/minno-time/0.3/time/overview.html).

Below is a "Minno.js playground" with a simple example for a miManager study  (you can edit the code and see what changes).

<section id="manager">
    <div class="buttons"><a class="activate-button">Activate</a></div>
    <div class="editor">[manager]</div>
</section>

## Server
In order to use minnojs you need to have a server to save your data.
You can of course role a server of your own, but we have a super simple server ready for your use.
The code and installation instructions can be found [here](https://github.com/minnojs/simple-minno-server).
