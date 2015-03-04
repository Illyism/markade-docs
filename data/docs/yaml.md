---
template: docs/index.jade
page: docs/yaml
title: Data by YAML
description: The how to on YAML.
nav:
  - YAML
  - Learn
  - Resources
---
## YAML

YAML is a recursive acronym for "YAML Ain't Markup Language".
It is a data serialisation language designed to be directly writable and readable by humans.
It is data-oriented as opposed to markup-oriented like [Markdown](markdown.html).

It is easy to write and data types can easily be mapped to javascript, you can set up
arrays, objects, booleans, numbers and null values much like JSON.

And all the data is structured by newlines and indentation.
The amount of spaces doesn't matter as long as keys on the same level are indented with
the same amount of space.

In Markade, the YAML part starts in between two `---` blocks.

## Learn
> from [Learn X In Y Minutes](http://learnxinyminutes.com/docs/yaml/)

```yaml
---
# Comments in YAML look like this.

################
# SCALAR TYPES #
################

# Our root object (which continues for the entire document) will be a map,
# which is equivalent to a dictionary, hash or object in other languages.
key: value
another_key: Another value goes here.
a_number_value: 100
scientific_notation: 1e+12
boolean: true
null_value: null
key with spaces: value
# Notice that strings don't need to be quoted. However, they can be.
however: "A string, enclosed in quotes."
"Keys can be quoted too.": "Useful if you want to put a ':' in your key."

# Multiple-line strings can be written either as a 'literal block' (using |),
# or a 'folded block' (using '>').
literal_block: |
    This entire block of text will be the value of the 'literal_block' key,
    with line breaks being preserved.

    The literal continues until de-dented, and the leading indentation is
    stripped.

        Any lines that are 'more-indented' keep the rest of their indentation -
        these lines will be indented by 4 spaces.
folded_style: >
    This entire block of text will be the value of 'folded_style', but this
    time, all newlines will be replaced with a single space.

    Blank lines, like above, are converted to a newline character.

        'More-indented' lines keep their newlines, too -
        this text will appear over two lines.

####################
# COLLECTION TYPES #
####################

# Nesting is achieved by indentation.
a_nested_map:
    key: value
    another_key: Another Value
    another_nested_map:
        hello: hello

# Maps don't have to have string keys.
0.25: a float key

# Keys can also be multi-line objects, using ? to indicate the start of a key.
? |
    This is a key
    that has multiple lines
: and this is its value

# YAML also allows collection types in keys, but many programming languages
# will complain.

# Sequences (equivalent to lists or arrays) look like this:
a_sequence:
    - Item 1
    - Item 2
    - 0.5 # sequences can contain disparate types.
    - Item 4
    - key: value
      another_key: another_value
    -
        - This is a sequence
        - inside another sequence

# Since YAML is a superset of JSON, you can also write JSON-style maps and
# sequences:
json_map: {"key": "value"}
json_seq: [3, 2, 1, "takeoff"]

#######################
# EXTRA YAML FEATURES #
#######################

# YAML also has a handy feature called 'anchors', which let you easily duplicate
# content across your document. Both of these keys will have the same value:
anchored_content: &anchor_name This string will appear as the value of two keys.
other_anchor: *anchor_name

# YAML also has tags, which you can use to explicitly declare types.
explicit_string: !!str 0.5

# EXTRA YAML TYPES #
####################

# Strings and numbers aren't the only scalars that YAML can understand.
# ISO-formatted date and datetime literals are also parsed.
datetime: 2001-12-15T02:59:43.1Z
datetime_with_spaces: 2001-12-14 21:59:43.10 -5
date: 2002-12-14

# The !!binary tag indicates that a string is actually a base64-encoded
# representation of a binary blob.
gif_file: !!binary |
    R0lGODlhDAAMAIQAAP//9/X17unp5WZmZgAAAOfn515eXvPz7Y6OjuDg4J+fn5
    OTk6enp56enmlpaWNjY6Ojo4SEhP/++f/++f/++f/++f/++f/++f/++f/++f/+
    +f/++f/++f/++f/++f/++SH+Dk1hZGUgd2l0aCBHSU1QACwAAAAADAAMAAAFLC
    AgjoEwnuNAFOhpEMTRiggcz4BNJHrv/zCFcLiwMWYNG84BwwEeECcgggoBADs=

# YAML also has a set type, which looks like this:
set:
    ? item1
    ? item2
    ? item3

# The above is equivalent to:
set2:
    item1: null
    item2: null
    item3: null
---
**Markdown** content
```



## Resources

* [Learn Yaml in Y Minutes](http://learnxinyminutes.com/docs/yaml/)
* [YAML on Wikipedia](https://en.wikipedia.org/wiki/YAML)