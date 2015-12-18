goog.provide('override_void_method');

/**
 * @constructor
 */
override_void_method.A = function() {};

override_void_method.A.prototype.foo = override_void_method.A.prototype.bar;

/**
 * @param {string} a
 * @return {boolean}
 */
override_void_method.A.prototype.bar = function(a) {};

/**
 * @constructor
 * @extends {override_void_method.A}
 */
override_void_method.B = function() {};

/**
 * @param {string} a
 */
override_void_method.B.prototype.foo = function(a) {};



