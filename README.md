# searchup [![Build Status](https://travis-ci.org/dmi3y/searchup.svg?branch=master)](https://travis-ci.org/dmi3y/searchup)

>Searching file from current working directory up until root or user home directory.

## How to use

`npm install searchup`

```javascript
var
    up = require('searchup'),
    path;

function checkPath(path) {

    if ( path ) {

        console.log('File was found at: ' + path);
    } else {

        console.log('Nothing has been found. Keep digging.');
    }
}

up.search('file.txt', function(path) {

    checkPath(path);
});

path = up.searchSync('file.txt');
checkPath(path);

```
Enter parameter the filename `string`, the output is full resolved path as a `string` or null if nothing was found.
