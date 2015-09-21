Package.describe({
  name: 'brunolemos:parse-sdk',
  version: '1.6.2',
  summary: 'Parse SDK for Meteor',
  git: 'https://github.com/brunolemos/parse-sdk.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles('parse-sdk.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('brunolemos:parse-sdk');
  api.addFiles('parse-sdk-tests.js');
});
