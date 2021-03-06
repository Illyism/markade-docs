---
template: docs/index.pug
page: docs/pug
title: Templates by Pug
description: Pug is a terse and simple templating language for HTML.
nav:
  - Pug
  - Tags and Content
  - Interpolation
  - Control
  - Mixins
  - Templates
  - Resources
---
## Pug

Pug is an elegant templating language, it has roots from Emmet and Haml and is meant for
quick, clean HTML coding. Pug is not the most [performant](http://paularmstrong.github.io/node-templates/benchmarks.html)
out there but for static websites, as is our purpose here it is good enough.

Personally, Pug allows me to write HTML very quickly especially combined with the powers of
mixins, a good structure and includes.

Here is a sample hello world page in Pug:

```pug
  doctype html
  html
    head
      title title name
    body
      header
        h1#title Hello World
      .container
        p(style="margin-top: 50px;") Lorem ipsum
```

In pug, comments start with a `//` or `//-` for unbuffered code.
And javascript starts with a `-`, you can execute javascript in these blocks.

```pug
// this is a comment
//- will not output within markup

- var hello = "world"; console.log(hello);
```

---

## Tags and Content

The first word in a line is your HTML tag. Anything that starts with a period
is a class. Anything that starts with a hash symbol `#` is an id.

Pug knows when tags are self-closing, like in the next example with img.
If no tag is specified, it just uses divs.


<div class='terminal group'>
<div class="title">Tags, ID and Classes</div>
<pre class="pug shell">
```
span.button.orange#alertBtn.primary
```
```
<span id="alertBtn" class="button orange primary"></span>
```
</pre></div>

To add text, type it after the element seperated by a space.
You can also use pipes `|` to add a newline for larger blocks of text
or whenever you want to seperate two elements with a space or text content.

To add an element on the same line without intending, add a semi-colon `:` before
the new element.

<div class='terminal group'>
<div class="title">Content</div>
<pre class="pug shell">
```
p I'm a paragraph
```
```
<p>I'm a paragraph</p>
```
</pre><pre class="pug shell">
```
p
  | I'm another paragraph with a 
  a(href="#") link
  |  inside.
```
```
<p>I'm another paragraph with a <a href="#">link</a> inside.</p>
```
</pre><pre class="pug shell">
```
.box
  .box
    .box: .box
```
```
<div class="box">
  <div class="box">
    <div class="box">
      <div class="box"></div>
    </div>
  </div>
</div>
```
</pre>
</div>

### Interpolation

You can interpolate content, escaped, unescaped.

<div class='terminal group'>
<div class="title">Escaped Interpolation</div><pre class="pug shell">
```
- var myself = "Jack";
- var brother = "John";
- var sister = "Jane";
h1= myself
p Siblings: #{brother} and #{sister}
```
```
<h1>Jack</h1>
<p>Siblings: John and Jane</p>
```
</pre></div>

`myself` follows the basic pattern for evaluating a template local, but the code in between `#{` and `}` is evaluated, escaped, and the result buffered into the output of the template being rendered.

This can be any valid Javascript expression, so you can do whatever feels good.

<div class='terminal group'>
<div class="title">Escaped Interpolation</div><pre class="pug shell">
```
- var tags = ["this", "is", "sparta"];
p #{tags.join("... ").toUpperCase()}!!!
```
```
<p>THIS... IS... SPARTA!!!</p>
```
</pre></div>

You can embed HTML through interpolation as well, but you have to make sure it is safe.
In the context of static content, this usually will be.

<div class='terminal group'>
<div class="title">Unescaped Interpolation</div><pre class="pug shell">
```
- var sum = "<b>"+(4+2)+"</b>"
.sum 4 + 2 = !{sum}
```
```
<div class="sum">4 + 2 = <b>6</b></div>
```
</pre></div>

---

## Attributes

Elements can have attributes, these are added in parentheses and seperated by commas.

If you don't put the value of the attribute in a string, then it tries to evaluate a
javascript expression.

<div class='terminal group'>
<div class="title">Attributes</div><pre class="pug shell">
```
a(href="/") Home
a.button(href="#Away", class="btn") Onwards
```
```
<a href="/">Home</a>
<a href="#Away" class="button btn">Onwards</a>
```
</pre></div>

The class attribute can be a string or an object mapping the value to a boolean.

<div class='terminal group vertical'>
<div class="title">Expressions</div><pre class="pug shell">
```
- var err = {type: "warning", msg: "You died"}
- var err2 = {type: "error", msg: "Something went wrong"}
.notice(class=err.type == "error" ? 'big red' : 'default') #{err.msg}
.notice(class=err2.type == "error" ? 'big red' : 'default') #{err2.msg)
```
```
<div class="notice default">You died</div>
<div class="notice big red">Something went wrong</div>
```
</pre><pre class="pug shell">
```
- var $ = {}; $.page = '/docs'

a.item(class={active: $.page === "/docs"}) Docs
a.item(class={active: $.page === "/about"}) About
```
```
<a class="item active">Docs</a>
<a class="item">About</a>
```
</pre></div>



---


## Control

As expected in a rendering engine there are control structures that you can use.

<div class='terminal group'>
<div class="title">The **if / else if / else** control</div><pre class="pug shell">
```
if "pigs" == "fly"
  p Magical world
else if "pigs" == "cats"
  p Impossible!
else
  p Just real life
```
```
<p>Just real life</p>
```
</pre></div>

<div class='terminal group'>
<div class="title">The **for** loop</div><pre class="pug shell">
```
- var animals = ["cats", "dogs", "lions", "bears"]
.animals
  for animal in animals
    span.animal #{animal}
  each animal, i in animals
    b(id="a"+i) #{animal}
```
```
<div class="animals">
  <span class="animal">Cats</span>
  <span class="animal">dogs</span>
  <span class="animal">lions</span>
  <span class="animal">bears</span>
  <b id="a0">cats</b>
  <b id="a1">dogs</b>
  <b id="a2">lions</b>
  <b id="a3">bears</b>
</div>
```
</pre></div>

---

## Mixins

In the pinnacle of DRY. You can use Mixins which are resuable blocks that you can call
repeatedly again and again. They can accept arguments of any type like functions.

<div class='terminal group vertical'>
<div class="title">Mixins</div><pre class="pug shell">
```
mixin menuItem(url, content, title)
  a.item(href=url, title=title) #{content}

.menu
  +menuItem("/home", "Home", "Back to home")
  +menuItem("/about", "About Markade", "Learn more about markade")
```
```
<div class="menu">
  <a class="item" title="Back to home">Home</a>
  <a class="item" title="Learn more about markade">About Markade</a>
</div>
```
</pre></div>

---

## Templates

Pug supports template inheritance via the `block` and `extends` keywords. A block is simply a "block" of Pug that may be replaced within a child template, this process is recursive.

You can also append content instead of overwriting it. Do this with `block append` or `append` for short or `prepend` for the opposite.

<div class='terminal group vertical'>
<div class="title">Block, Extends and Append</div><pre class="pug shell">
```
// _layout.pug
h1 This is the layout
block content

// docs.pug
extends _layout
block content
  p These are the docs

// welcome.pug
extends docs
block append content
  p This is more content
```
```
<h1>This is the layout</h1>
<p>These are the docs</p>
<p>This is more content</p>
```
</pre></div>

It is possible to `include` other pug files. Even a file with only mixins or blocks that won't immediately render.

This is useful to use for a footer, header, sidebar setup for example.

<div class='terminal group vertical'>
<div class="title">Include</div><pre class="pug shell">
```
// _menu.pug
a(href="#1") Link
a(href="#2") Link

// docs.pug
p A paragraph
include _menu
```
```
<p>A paragraph</p>
<a href="#1">Link</a>
<a href="#2">Link</a>
```
</pre></div>

---

## Resources

* [Pug](https://pugjs.org/api/getting-started.html)
