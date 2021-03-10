---
title: Core concepts
weight: 10
description: >
    The very basics of approaching a MinnoJS task.
    Including the programming language and how to set up and run a task online.
---

The tasks we use are created in a simplified Javascript environment.
So we first introduce some very basic [Javascript](./javascript) to get you started.

Structurally, each task is composed of frames (each defined using Javascript).
For instance, the basic frame for miQuest (our questionnaires component) is the page, which holds several sub-frames: the questions.
Each page or question is represented by an object (defined with Javascript).
The programming of a task involves setting the properties of these objects (e.g., set the wording of your question into a question object).
The properties of these objects are discussed in the API section of each of their respective documentation sites.

You will learn the basics of composing a task from these objects in the [Creating a task](create) section.
