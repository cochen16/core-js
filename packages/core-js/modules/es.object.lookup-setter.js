'use strict';
var $ = require('../internals/export');
var FORCED = require('../internals/object-prototype-accessors-forced');
var toObject = require('../internals/to-object');
var toPrimitive = require('../internals/to-primitive');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;

var getPrototypeOf = Object.getPrototypeOf;

// `Object.prototype.__lookupSetter__` method
// https://tc39.github.io/ecma262/#sec-object.prototype.__lookupSetter__
$({ target: 'Object', proto: true, forced: FORCED }, {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject(this);
    var key = toPrimitive(P, true);
    var desc;
    do {
      if (desc = getOwnPropertyDescriptor(O, key)) return desc.set;
    } while (O = getPrototypeOf(O));
  },
});
