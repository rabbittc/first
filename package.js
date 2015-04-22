Package.describe({
    name: 'theara:first',
    version: '0.0.4',
    // Brief, one-line summary of the package.
    summary: 'My first package',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/rabbittc/first.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');

    api.use('underscore');
    api.use('theara:fa-helpers@0.0.1');

    api.export('first');

    api.addFiles('first.js');
});

Package.onTest(function (api) {
    api.use('tinytest');
    api.use('theara:first');
    api.addFiles('first-tests.js');
});
