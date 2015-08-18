Package.describe({
  name: 'waitingkuo:autoform-duration',
  summary: 'Custom duration input type for AutoForm',
  version: '0.1.1',
  git: 'https://github.com/waitingkuo/meteor-autoform-duration.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.use([
    'coffeescript',
    'templating',
    'blaze',
    'aldeed:autoform@5.0.0',
  ], ['client']);
  api.addFiles([
    'oaf:autoform-customnumber.html',
    'oaf:autoform-customnumber.coffee',
    'oaf:autoform-duration.html',
    'oaf:autoform-duration.coffee',
  ], ['client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('coffeescript', ['client', 'server']);
  api.use('waitingkuo:autoform-duration');
  api.addFiles('oaf:autoform-duration-tests.coffee');
});
