---
page: index
title: A static site generator that stands on the shoulders of giants.

headerBlocks:
  - title: Robust
    description: Working with true and tested technologies - no more reinventing the wheel, just Pug templates powered by YAML and Markdown.
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
@ local
---
title: Local
image: /img/local.jpg
url: http://local.il.ly
github: https://github.com/Illyism/local-web/tree/master 
---
Website for an Android application
@ end

@ tasktool
---
title: Tasktool
image: /img/tasktool.jpg
url: http://tasktool.il.ly
---
Documentation for Tasktool
@ end

@ sample
---
title: Sample Site
image: /img/sample.jpg
github: https://github.com/Illyism/markade-default
---
Sample markade site
@ end

@ docs
---
title: Markade Docs
image: /img/docs.jpg
github: https://github.com/Illyism/markade-docs
---
The markade documentation
@ end