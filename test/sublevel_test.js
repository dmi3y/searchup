'use strict';

var up = require('../src/index.js'),
    cwd = process.cwd();

module.exports = {
    'setUp': function(cb) {

        process.chdir(cwd + '/test/subdir/subsubdir/');
        cb();
    },
    'tearDown': function(cb) {

        process.chdir(cwd);
        cb();
    },
    'package.json - from subsubdir': function(test) {

        test.expect(1);
        up.search('package.json', function(path) {

            test.equal('package.json', path.split(/\\|\//g).pop());
            test.done();
        });
    },
    'package.json - sync from subsubdir': function(test) {
        var
            path;

        test.expect(1);
        path = up.searchSync('package.json');
        test.equal('package.json', path.split(/\\|\//g).pop());
        test.done();
    }
};
