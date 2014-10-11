'use strict';

var up = require('../src/index.js'),
    path = require('path'),
    cwd = path.resolve(process.cwd());

module.exports = {
    'user home at package.json level': {
        'setUp': function(cb) {

            process.chdir(cwd + '/test/subdir/subsubdir/');
            process.env.HOME = cwd;
            up.__sneakin__({
                userdir: cwd
            });
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
    },
    'user home at test level': {
        'setUp': function(cb) {

            process.chdir(cwd + '/test/subdir/subsubdir/');
            up.__sneakin__({
                userdir: path.resolve(cwd + '/test/')
            });
            cb();
        },
        'tearDown': function(cb) {

            process.chdir(cwd);
            cb();
        },
        'package.json - from subsubdir': function(test) {

            test.expect(1);
            up.search('package.json', function(path) {

                test.ok( path === null );
                test.done();
            });
        },
        'package.json - sync from subsubdir': function(test) {
            var
                path;

            test.expect(1);
            path = up.searchSync('package.json');
            test.ok( path === null );
            test.done();
        }
    }
};
