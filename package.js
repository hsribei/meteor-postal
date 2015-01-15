Package.describe({
  name: 'obvio171:postal',
  summary: 'Email automation. Send newsletters from /postal as admin (isAdmin: true).',
  version: '1.0.1',
  git: 'https://github.com/obvio171/meteor-postal.git'
});

Package.onUse(function(api) {
  api.use('email');
  api.use(['templating'], 'client');
  api.use('iron:router@1.0.6');
  api.use('aldeed:autoform@4.2.1');

  api.versionsFrom('1.0.2.1');
  api.addFiles('lib/newsletters.js');
  api.addFiles('obvio171:postal.html');
  api.addFiles('obvio171:postal.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('obvio171:postal');
  api.addFiles('obvio171:postal-tests.js');
});
