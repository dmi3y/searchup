'use strict';

var up = require('../src/index.js');

module.exports = {

    'package.json': function(test) {

        test.expect(1);
        up.search('package.json', function(path) {

            test.equal('package.json', path.split(/\\|\//g).pop());
            test.done();
        });
    },
    'package.json - sync': function(test) {
        var
            path;

        test.expect(1);
        path = up.searchSync('package.json');
        test.equal('package.json', path.split(/\\|\//g).pop());
        test.done();
    }
};
