# vparse

Simple Version Parser, for Client + Server.

[![Build Status](https://travis-ci.org/vitaly-t/vparse.svg?branch=master)](https://travis-ci.org/vitaly-t/vparse)

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
    parsed: [1, 2, 3, 4], // parsed version numbers - always an array of 4 integers
    isEmpty: false, // = true when 'parsed' is all zeros - [0, 0, 0, 0]    
    text: '1.2.3.4' // normalized version string
}
```

## Features

The parser supports the following syntax:

* Skipping numbers, i.e. `.1..4`
* An empty string is the same as `0.0.0.0`

Passing in a non-string value will throw an error.
