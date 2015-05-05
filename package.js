Package.describe({
  name: 'tpio:comments',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Commenting for any collection',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/tpio/comments',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

both = ['client','server'];

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  //api.addFiles('comments.js');
  api.use(
    [
      'templating'
    ],
    both);


  api.export('Comments',['server','client']);

  api.addFiles(
    [
      'lib/client/template.html',
      'lib/client/template.js'
    ],
    'client');

  api.addFiles(
    [
      'lib/both/comments.collection.js'
    ],
    both);

  api.addFiles(
    [
      'lib/server/comments.publish.js'
    ],
    'server');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('tpio:comments');
  api.addFiles('comments-tests.js');
});
