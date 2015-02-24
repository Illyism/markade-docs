---
template: docs/index.jade
page: docs/markdown
title: Content by Markdown
description: A brief guide on Markdown, a text-to-HTML conversion tool for web writers.
nav:
  - Markdown
  - HTML
  - Additions
  - Resources
---
## Markdown

Markdown is a markup language for the web. It can output its data to a HTML format.
The reason we're using markdown is very simple: it is well, known, tested and robust.

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

> Make sure to view the [Links](#resources) below to learn more of the basics.


---

## HTML

A thing to keep in mind is that markdown does not provide styling on its own.
The language is meant for a simple blog post, or a reply to a comment.

But Markdown allows HTML that can be embedded, so for our purpose it can help
tremendously in setting up the styling just like we want it.
You can add classnames or ids or nest as you want.

<div class='terminal group'>
<div class="title">HTML in Markdown Example.</div><pre class="markdown shell">
```
This is **bold**, this is <em>italic</em> and this is a script:
  <script>document.write(new Date())</script>
```
<div class="result">This is **bold**, this is <em>italic</em> and this is a script:
<script>document.write(new Date())</script>
</div>
</pre></div>

For example, the way I set up these code examples like the one above is:

```html
<div class='terminal group'>
<div class="title">Title</div>
<pre class="markdown shell">
  <code>
  This is **bold**,
  this is *italic* and
  this is a [link](#).
  </code>
  <code>
  This is <strong>bold</strong>,
  this is <em>italic</em> and
  this is a <a href="#">link</a>.
  </code>
</pre></div>
```

And all the rest is handled in CSS. This works well for our purpose because it can be
still used by experienced web-developers in creating their content, they can do as they will.

But even by someone with less technological knowledge, it can be edited after just a brief
knowledge of markdown.

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

* [Markdown Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* [Learn Markdown in Y Minutes](http://learnxinyminutes.com/docs/markdown/)
* [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/)