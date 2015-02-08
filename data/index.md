---
page: index
title: A static site generator that stands on the shoulders of giants.

headerBlocks:
  - title: Robust
    description: Working with true and tested technologies - no more reinventing the wheel, just Jade templates powered by YAML and Markdown.
    link:
      title: How Markade is made →
      url: /about/
  - title: Static
    description: All the content is static and ready for any hosting plan or server, be it on Nginx or Apache or even simply in your file browser.
    link:
      title: Documentation →
      url: /docs/
  - title: Configurable 
    description: From a few pages, to a wiki, to a blog, to a complete complex website. Markade is whatever you want to be.
    link:
      title: See examples →
      url: /examples/

shell:
  - dir: ~
    cmd: npm install -g markade
  - dir: ~
    cmd: markade init website
  - dir: ~
    cmd: cd website
  - dir: ~/website
    cmd: markade compile
  - dir: ~/website
    cmd: markade watch
---

@ init
```bash
  ~/website $ markade init .

  This utility will walk you through making a markade directory.

  It will set up a markade.json file with defaults
  and set up a basic Hello World page.

  Press ^C at any time to quit.

  Setting up in ~/website:
    ~/website
    ~/website/templates
    ~/website/data
    ~/website/public
     ~/website/public/css
     ~/website/public/js

  » Is that okay? [yes] yes
    ✔ ~/website
    ✔ ~/website/templates
    ✔ ~/website/data
    ✔ ~/website/public
    ✔ ~/website/public/js
    ✔ ~/website/public/css

    ✔ ~/website/markade.json
    ✔ ~/website/public/css/style.css
    ✔ ~/website/templates/index.jade
    ✔ ~/website/data/index.md
    ✔ ~/website/data/second.md

    ✔ Now run markade compile mrk
```
@ end

@ compile
```bash
  ~/website $ markade compile .                                      ⏎

  Looking for markade.json in .
  Compiling directory...
  - Parsing: ~/website/data/second.md
    Using template: ~/website/templates/index.jade
  - Parsing: ~/website/data/index.md
    Using template: ~/website/templates/index.jade
    ✔ Compiled ~/website/data/second.md + ~/website/templates/index.jade = second.html
    ✔ Compiled ~/website/data/index.md + ~/website/templates/index.jade = index.html
```
@ end

@ watch
```bash
  ~/website $ markade watch .

  Looking for markade.json in ~/website...
  Launching in ~/website on 8080
  Serving "~/website" at http://0.0.0.0:8080
```
@ end