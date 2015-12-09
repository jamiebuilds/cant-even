_ = require 'underscore'

###
Checks if the specified module identifer(s) resolves and you can't even.

@param {string|string[]} [identifiers] The module identifiers that you can't even,
specified as individual identifiers or arrays of identifiers.
@returns {boolean} Returns `true` if any modules resolve, else `false`.
@example

var ce = require('cant-even');
if (ce('coffee-script')) {
  console.warn('Whoa, I srsly can’t even');
}
###

module.exports = -> _.some _.toArray(arguments), (id) -> try require.resolve id catch
