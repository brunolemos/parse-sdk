Package.describe({
  name: 'brunolemos:parse-sdk',
  version: '1.9.1',
  summary: 'Parse SDK for Meteor',
  git: 'https://github.com/brunolemos/parse-sdk.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.mainModule('parse-sdk.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('brunolemos:parse-sdk');
  api.mainModule('parse-sdk-tests.js');
});
