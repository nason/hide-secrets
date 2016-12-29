# hide-secrets

[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![NPM version][npm-image]][npm-url]
[![js-standard-style][standard-image]][standard-url]

```js
var hide = require('hide-secrets')

var obj = {
  innerObject: {
    password: 'abc123',
    email: 'ben@npmjs.com',
    token: 'my-secret-token'
  },
  auth: '' // empty strings are left empty.
}

console.log(hide(obj))
```

outputs

```
{
  innerObject: {
    password: '[SECRET]',
    email: 'ben@npmjs.com',
    token: '[SECRET]'
  },
  auth: ''
}
```

## Configuration

### Secret Fields
By default the following fields are obfuscated:

`password`, `pass`, `token`, `auth`, `secret`, `passphrase`.

You can also pass in an array of custom fields in an options object:

```js
var hide = require('hide-secrets')

var obj = {
  innerObject: {
    topSecret: 'abc123',
    email: 'ben@npmjs.com',
  },
}

console.log(hide(obj, {
  badWords: ['topSecret']
}))

```

outputs

```js
{
  innerObject: {
    topSecret: '[SECRET]',
    email: 'ben@npmjs.com',
  },
}
```

Note that passing in custom `badWords` overwrites the defaults.

## License

ISC

[travis-url]: https://travis-ci.org/bcoe/hide-secrets
[travis-image]: https://img.shields.io/travis/bcoe/hide-secrets.svg
[coveralls-url]: https://coveralls.io/github/bcoe/hide-secrets
[coveralls-image]: https://img.shields.io/coveralls/bcoe/hide-secrets.svg
[npm-url]: https://npmjs.org/package/hide-secrets
[npm-image]: https://img.shields.io/npm/v/hide-secrets.svg
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: https://github.com/feross/standard
