---
title: Media
weight: 20
description: Media are the actual stimuli that we display (such as text or images).
---

MinnoJS supports three types of media:

* Plain text: `{word: 'Your very cool stimulus'}`
* HTML: `{html: "<div>any html</div>"}`
* Image: `{image: 'some/url/image.png}`

If you insert a string instead of a media object the player treats it as if it was Plain text.
The folowing two media definitions have the same outcome:`'Wiki'`, `{word:'Wiki'}`

