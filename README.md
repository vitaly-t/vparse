# vparse

Simple/smallest version parser, for both client and server.

It is the minimum for parsing and comparing versions, when use of `semver` is an overkill.

[![Build Status](https://travis-ci.org/vitaly-t/vparse.svg?branch=master)](https://travis-ci.org/vitaly-t/vparse)
[![Coverage Status](https://coveralls.io/repos/vitaly-t/vparse/badge.svg?branch=master)](https://coveralls.io/r/vitaly-t/vparse?branch=master)

## Installing

```
$ npm install vparse
```

## Usage

* **Node.js**

```js
var parseVersion = require('vparse');

parseVersion('1.2.3.4');
```

* **Browser**

```html
<script src="./vparse"></script>

<script>
    parseVersion('1.2.3.4');
</script>
```

Function `parseVersion` returns an object:

```js
{
    major: 1,
    minor: 2,
    patch: 3,
    build: 4,
    parsed: [1, 2, 3, 4], // is always an array of 4 integers
    isEmpty: false, // = true when 'parsed' = [0, 0, 0, 0]    
    text: '1.2.3.4', // normalized version string
    compare: function(v) // comparison function
```

Function `compare` takes either a version string or a pre-parsed object, and returns:

 - `0` when the versions are the same
 - `1` when `this` version is greater
 - `-1` when `this` version is lesser 

## Features

All symbols that are not digits or dots are removed before parsing the string. 

As a result, a version string like `^1.2alfa.30.*` becomes `1.2.30.0`.

The parser also supports the following syntax:

* Skipping numbers, i.e. `.1..4`
* An empty string is the same as `0.0.0.0`

Passing in a non-string value will throw an error.
