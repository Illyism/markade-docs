---
template: docs/index.jade
page: docs/markade
title: Markade
description: Markade - The tool in three commands.
---

First, you need [node.js](http://nodejs.org) and [npm](http://npmjs.com). Follow the installation instructions from node.js.

Then, to install Markade you will need to have NPM and run `npm install -g markade`. This will install Markade as a binary
allowing you to execute it anywhere.

Then you can edit your files or confirm that everyone is working okay by compiling the sample files that Markade includes.
You can do this with `markade compile <directory>` to look for markade.json and compile all the files it finds.

You can then watch and run a local server to view the files with `markade watch <directory>`.

In short:

```bash
 $ npm install -g markade
 $ markade init website
 $ cd website
~/website $ markade compile
~/website $ markade watch
```