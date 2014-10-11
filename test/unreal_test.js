'use strict';

var up = require('../src/index.js');

module.exports = {

    '!@#$%': function(test) {

        test.expect(1);
        up.search('!@#$%', function(path) {

            test.ok( path === null );
            test.done();
        });
    },
    '!@#$% - sync': function(test) {
        var
            path;

        test.expect(1);
        path = up.searchSync('!@#$%');
        test.ok( path === null );
        test.done();
    }
};
