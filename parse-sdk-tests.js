var Tinytest = require('meteor/tinytest').Tinytest;

Tinytest.add('global-object', function (test) {
  test.equal(typeof Parse, 'object');
});
