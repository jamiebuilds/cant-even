'use strict';

var arrayProto = Array.prototype,
    concat = arrayProto.concat,
    some = arrayProto.some;

/**
 * Checks if the specified module identifer(s) resolves and you can't even.
 *
 * @param {string|string[]} [identifiers] The module identifiers that you can't even,
 * specified as individual identifiers or arrays of identifiers.
 * @returns {boolean} Returns `true` if any modules resolve, else `false`.
 * @example
 *
 * var ce = require('cant-even');
 * if (ce('coffee-script')) {
 *   console.warn('Whoa, I srsly can’t even');
 * }
 */
module.exports = function canteven() {
  return some.call(concat.apply(arrayProto, arguments), function(id) {
    try {
      return require.resolve(id);
    } catch(e) {}
  });
};
