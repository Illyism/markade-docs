---
template: docs/index.jade
page: docs/markdown
title: Learn Markdown
nav:
  - Overview
  - HTML
  - Additions
  - Resources
---
## Overview

Markdown is a markup language for the web. It can output its data to a HTML format.
The reason we're using markdown is very simple: it is well, known, tested and robust.

It is used by companies like Reddit in their commenting features, by Github in their Readme
and by many other companies around the world.

Markade uses [marked](https://github.com/chjj/marked).
It enables some additional features like tables, HTML content and abbreviations.


<div class='terminal group'>
<div class="title">This is **bold**, this is *italic* and this is a [link](http://markade.il.ly).</div><pre class="markdown shell">
```
This is **bold**,
this is *italic* and
this is a [link](#).
```
```
This is <strong>bold</strong>,
this is <em>italic</em> and
this is a <a href="#">link</a>.
```
</pre></div>

---

## HTML

A thing to keep in mind is that markdown does not provide styling on its own.
Neither does it help with layout, so things like a sidebar, grid and so forth
are impossible to do well in this language.

But still, if you really have to, you can embed HTML content in a markdown file,
it depends on the template if it is not escaped.

```markdown
This is <b>bold</b>, this is <em>italic</em> and this is a script:
  <script>document.write(new Date())</script>
```

This is <b>bold</b>, this is <em>italic</em> and this is a script:
<script>document.write(new Date())</script>

---

## Additions

There is a lot more information on the internet that I can provide in this guide.
The only major change in Markade that we have is that we use 
````
  @ begin
    markdown content
  @ end
````
blocks
which are explained in depth in the [YAML](/docs/yaml.html) section of the documentation.

---

### Resources

* [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/)
* [Common markup](https://gist.github.com/dupuy/1855764)