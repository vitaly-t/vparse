# TypeScript

This is a TypeScript re-implementation of the library, identical with the [JavaScript version], except it additionally
exports class `Version`, so you can use either the same `parseVersion` function or class `Version` directly.

## Usage

* Via function `parseVersion`:

```ts
import {Version, parseVersion} from 'vparse/ts';

var v: Version = parseVersion('1.2.3.4');  
```

* Directly via class `Version`:

```ts
import {Version} from 'vparse/ts';

var v: Version = new Version('1.2.3.4');
```

The rest is identical with the [JavaScript version].

[JavaScript version]:https://github.com/vitaly-t/vparse
