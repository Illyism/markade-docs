---
template: docs/index.jade
page: docs/markade
title: "<img height='80' src='/markade-white.png'/>"
description: The tool in three commands.
nav:
  - CLI
  - API
---

# CLI

First, you need [node.js](http://nodejs.org) and [npm](http://npmjs.com). Follow the installation instructions from node.js.

Then, to install Markade you will need to have NPM and run `npm install -g markade`. This will install Markade as a binary
allowing you to execute it anywhere.

Then you can edit your files or confirm that everyone is working okay by compiling the sample files that Markade includes.
You can do this with `markade compile <directory>` to look for markade.json and compile all the files it finds.

You can then watch and run a local server to view the files with `markade watch <directory>`.

## Installation

1. Get [Node](https://github.com/joyent/node/wiki/installation).
2. Install Markade: `npm install -g markade`
3. You now have the `markade` command line utility.


## Initializing

1. (Optional) Make a new directory.
2. To initialize, run `markade init <directory>`. This will create a markade.json file and copy over the sample templates and data.
3. You can edit the markade.json file as you wish, such as the paths for outut, template or data.


## Compiling

1. (Optional) Move into your directory.
2. To compile, run `markade compile <directory>`. This will look for markade.json you created earlier then look for data files in the data directory you specified and compare them against the templates in the following way:
  1. A YAML variable `template: file.jade` specified.
  2. Templates defined in your markade.json in a templates object. `"templates": {"file.jade": "file.md"}`
  3. If none found, it defaults to a file with the same name in the template directory. 
3. Then it will write the file in the same relative path as your data file in your output directory in the following way:
  1. A YAML variable `output: file.xml` specified.
  2. The same name and relative path as your data file: `data/about/index.md` -> `public/about/index.html`.

## Watching

1. To watch for changes and run a server, run `markade watch <directory>`


---

# API

## Options

The API takes an options object with the following set of options.

||
|-|
| jade | object | Jade options
| template | string | Source Jade template string
| options | object | Options for markade and jade
| callback | function | A function to call on error or compilation with `(err, html)` as arguments

### options.log

Options for logging to console. Available options include:

* "off" - No logging
* "warn" - Output warnings
* "error" - Output errors
* "log" - Output important information including warnings and errors
* "info" - Output everything

### options.jade

Takes all options that the Jade API takes. Here are the most useful ones.

||
|-|
| filename | string | The path to your filename, required for relative includes and extends
| pretty | boolean | Adds whitespace to the resulting html to make it easier for a human to read using `' '` as indentation. If a string is specified, that will be used as indentation instead (e.g. `'\t'`).

## markade(data, template, options, callback)

Compile a Jade string with a Markdown string to a HTML string.

||
|-|
| data | string | Markdown stringng
| template | string | Source Jade template string
| options | object | Options for Markade and Jade (see [above](#options))
| callback | function | A function to call on error or compilation


## Example

```js

var markade = require("markade");

var data = "**bold** text";
var template = "| !{html}";

var options = {
  jade: {
    filename: options.template
  }
};

markade(data, template, options, function(err, html) {
  if (err) return console.error(err);
  console.log(html);
});

// returns: <b>bold</b> text.

```