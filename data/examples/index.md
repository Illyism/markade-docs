---
template: examples.pug
page: examples
title: Examples
description: Example code and real life cases
---
@ local
---
css: wide
title: Local
image: /img/local.jpg
url: http://local.il.ly
github: https://github.com/Illyism/local-web/tree/master 
---
Website for an Android application. Written in a very DRY manner.
Every section has a block of its own.

```
# Example block:
 @ tap
---
css: image green
---
![](/img/screen3.png)

**Tap and hold** to search for Instagram shots in the local area.
 @ end


# Template:
mixin block(key, obj)
  section(id=key, class=obj.meta.css)
    .contain
      if obj.meta.logo
        img(src=obj.meta.logo).logo
      h2.title #{obj.meta.title}
      .content !{obj.html}
      if obj.meta.link
        a(href=obj.meta.link.url).link #{obj.meta.link.title}

# Uses lodash, removes the first block and parses them through the mixin
block content
  for key in markade._.drop(Object.keys($$), 1)
    +block(key, $$[key])

```

@ end


@ sample
---
css: wide
title: Sample Site
image: /img/sample.jpg
github: https://github.com/Illyism/markade-default
---
Sample markade site. You can generate on yourself if you run `markade init`.
@ end

@ docs
---
css: wide
title: Markade Docs
image: /img/docs.jpg
github: https://github.com/Illyism/markade-docs
---
The website you're reading right now is generated with markade. And it is completely open source.

@ end

@ tasktool
---
css: wide
title: Tasktool
image: /img/tasktool.jpg
url: http://tasktool.il.ly
---
Documentation for Tasktool. Has nice typography and a lot of text. The idea was to make it not feel like a static website.
@ end
