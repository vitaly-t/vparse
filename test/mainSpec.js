'use strict';

var parse = require('../');

describe('empty version', function () {
    it('must support empty string', function () {
        expect(parse('')).toEqual({
            major: 0,
            minor: 0,
            patch: 0,
            build: 0,
            isEmpty: true,
            parsed: [0, 0, 0, 0]
        });
        expect(parse(new String())).toEqual({
            major: 0,
            minor: 0,
            patch: 0,
            build: 0,
            isEmpty: true,
            parsed: [0, 0, 0, 0]
        });
    });
    it('must ignore spaces', function () {
        expect(parse('   ')).toEqual({
            major: 0,
            minor: 0,
            patch: 0,
            build: 0,
            isEmpty: true,
            parsed: [0, 0, 0, 0]
        });
    });
    it('must ignore dots', function () {
        expect(parse('...')).toEqual({
            major: 0,
            minor: 0,
            patch: 0,
            build: 0,
            isEmpty: true,
            parsed: [0, 0, 0, 0]
        });
    });
    it('must initialize correctly', function () {
        expect(parse('0.0.0.0')).toEqual({
            major: 0,
            minor: 0,
            patch: 0,
            build: 0,
            isEmpty: true,
            parsed: [0, 0, 0, 0]
        });
    });
});

describe('invalid input', function () {
    it('must throw an error', function () {
        expect(function () {
            parse();
        }).toThrow();
        expect(function () {
            parse(0);
        }).toThrow();
        expect(function () {
            parse(123);
        }).toThrow();
        expect(function () {
            parse([]);
        }).toThrow();
    });
});

describe('valid input', function () {
    it('must support single digits', function () {
        expect(parse('1.2.3.4')).toEqual({
            major: 1,
            minor: 2,
            patch: 3,
            build: 4,
            isEmpty: false,
            parsed: [1, 2, 3, 4]
        });
    });
    it('must support long numbers', function () {
        expect(parse('12345678.22222222.33333333.44444444')).toEqual({
            major: 12345678,
            minor: 22222222,
            patch: 33333333,
            build: 44444444,
            isEmpty: false,
            parsed: [12345678, 22222222, 33333333, 44444444]
        });
    });
    it('must support skipping numbers', function () {
        expect(parse('.7')).toEqual({
            major: 0,
            minor: 7,
            patch: 0,
            build: 0,
            isEmpty: false,
            parsed: [0, 7, 0, 0]
        });
        expect(parse('...7')).toEqual({
            major: 0,
            minor: 0,
            patch: 0,
            build: 7,
            isEmpty: false,
            parsed: [0, 0, 0, 7]
        });
        expect(parse('2..7')).toEqual({
            major: 2,
            minor: 0,
            patch: 7,
            build: 0,
            isEmpty: false,
            parsed: [2, 0, 7, 0]
        });
    });

    // TODO: This one fails
    /*
    it('must ignore spaces', function () {
        expect(parse('  1  .  2  .  3  .  4')).toEqual({
            major: 1,
            minor: 2,
            patch: 3,
            build: 4,
            isEmpty: false,
            parsed: [1, 2, 3, 4]
        });
    });

    it('must ignore extra letters', function () {

    });*/
});
