'use strict';

var exec = require('child_process').exec;
var path = require('path');

describe('Typescript', function () {
    describe('build', function () {
        it('must build without errors', function (done) {
            exec('tsc', {cwd: path.join(__dirname, 'ts')}, function (error) {
                expect(error).toBe(null);
                done();
            })
        });
    });
});
