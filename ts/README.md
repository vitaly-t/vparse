# TypeScript

This is a TypeScript re-implementation of the library, identical with the [JavaScript version], except it additionally
exports class [Version], so you can either use it directly or via the same `parseVersion` function.

## Usage

Simply add file `vparse.ts` into your project.

* Directly via class `Version`:

```ts
import {Version} from 'vparse';

var v: Version = new Version('1.2.3.4');
```

* Via function `parseVersion`:

```ts
import {Version, parseVersion} from 'vparse';

var v: Version = parseVersion('1.2.3.4');  
```

The rest is identical with the [JavaScript version] of the library.

[JavaScript version]:https://github.com/vitaly-t/vparse
[Version]:https://github.com/vitaly-t/vparse/blob/master/ts/vparse.ts
