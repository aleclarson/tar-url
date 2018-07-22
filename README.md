# tar-url v0.0.3

Resolve the `.tgz` url for a remote package.

Defaults to latest version.

```js
let tarUrl = require('tar-url')

await tarUrl('lodash')
// https://registry.npmjs.org/lodash/-/lodash-4.17.5.tgz

await tarUrl('lodash', '^4.16.0')
// https://registry.npmjs.org/lodash/-/lodash-4.17.5.tgz
```

All registries are supported (thanks to [`registry-auth-token`](https://npmjs.com/package/registry-auth-token)).

