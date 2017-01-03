---
template: static.pug
page: about
title: Why, how and who of Markade.
---
## Why use Markade?

Markade is a set of tools, neatly packaged together to enable
ease-of-use for the lucky user who stumbled upon this static site generator.

Like, many other static site generators, it is meant to compile your files
without having the need to render them each time a request is sent to the
server. This improves performance, as the server can just read a file and send
it immediately to the browser.

All the files are cached on their own without having to spend work on setting
it up. Just like any other static file.

Having static files also means you can upload them on Github as your `gh-pages`
or to include them in your zip file whenever an user downloads your app.

---

## What makes Markade special?

There are a ton of different static site generators and most of them are
very good indeed! But I felt it was not necessary to create my own templating
engine when so many others are available to re-use without
having to spend time reinventing the wheel.

We are using **Markdown** for our content. This is a well-known and tested
text-to-HTML language and tool that can be used even by non-tech-savvy users.

Yet, Markdown does not support all the good things that are possible to use in
a programming language or a template; no arrays, objects, booleans, numbers!

To fill this gap, markade uses **YAML** - this is a data definition language.
It can handle a lot of different variants of data and is used by many talented
programmers and is supported by tons of different programming languages.

An addition that Markade makes on top of this is the combination of both 
YAML and Markdown in one file. That, and the seperation of specific Markdown
blocks to an object that holds them all seperately.

And to bring it all together, Markade uses **Pug**; an elegant way to write
HTML in a very easy and clean way. It has a lot of advanced features like 
template inheritance, includes, mixins and much more!

---

## Why did you make Markade?

I was working on a [website](http://avalon-rpg.com/) for a client at the time and one of the specs was
to make the content editable easily by non-tech-aware editors. The content had
to be stored locally as a file as well.

So looking around, and being already familiar with both Markdown and Pug I
came upon an implementation of Markdown that combined YAML with the seperation
of both by two `---` lines.

That was exactly what I needed and in time I came to find a single limitation
on that approach. I wanted to re-use markdown code in different parts of the
template. The was I saw that was possible is by using a `@ <key>` and `@ end`
tags to denote the section the markdown code belonged to.

This worked for me and thus Markade was born. It is not special,
beautifully written code like Jekyll for example. But it lives on the work
of other amazing work.

In the end, I saw the need for a static generator when I wanted to cook up
a little, simple website and I thought to port my work that I was doing for
[Avalon](http://avalon-rpg.com/) and seperate out the module.