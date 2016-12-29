var traverse = require('traverse')

var defaultBadWords = [
  'password',
  'pass',
  'token',
  'auth',
  'secret',
  'passphrase',
  'card'
]

var defaultReplacement = '[SECRET]'

module.exports = function (obj, opts) {
  opts = opts || {}
  opts.badWords = opts.badWords || defaultBadWords
  opts.replacement = opts.replacement || defaultReplacement

  return traverse(obj).map(function (n) {
    for (var i = 0, key; (key = this.path[i]) !== undefined; i++) {
      if (~opts.badWords.indexOf(key)) {
        if (typeof n === 'string') return replaceString(n, opts)
      }
    }
  })
}

function replaceString (str, opts) {
  if (str) return opts.replacement
}
