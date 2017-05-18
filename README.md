# vparse

Simple Version Parser.

## Installing

```
$ npm install vparse
```

## Usage

```js
var parseVersion = require('vparse');

var v = parseVersion('1.2.3.4');
```
Returns an object:
```js
{
    major: 1,
    minor: 2,
    patch: 3,
    build: 4,
    isEmpty: false, // = true when parsed = [0, 0, 0, 0]
    parsed: [1, 2, 3, 4] // parsed version numbers
}
```

## Features

The parser supports the following syntax:

* Skipping numbers, i.e. `.1..4`
* An empty string is the same as `0.0.0.0`
