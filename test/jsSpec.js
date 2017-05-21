'use strict';

var parse = require('../');

describe('empty version', function () {
    it('must support empty string', function () {
        expect(parse('')).toEqual({
            major: 0,
            minor: 0,
            patch: 0,
            build: 0,
            parsed: [0, 0, 0, 0],
            isEmpty: true,
            text: '0.0.0.0',
            compare: jasmine.any(Function)
        });
        expect(parse(new String())).toEqual({
            major: 0,
            minor: 0,
            patch: 0,
            build: 0,
            parsed: [0, 0, 0, 0],
            isEmpty: true,
            text: '0.0.0.0',
            compare: jasmine.any(Function)
        });
    });
    it('must ignore spaces', function () {
        expect(parse('   ')).toEqual({
            major: 0,
            minor: 0,
            patch: 0,
            build: 0,
            parsed: [0, 0, 0, 0],
            isEmpty: true,
            text: '0.0.0.0',
            compare: jasmine.any(Function)
        });
    });
    it('must ignore dots', function () {
        expect(parse('...')).toEqual({
            major: 0,
            minor: 0,
            patch: 0,
            build: 0,
            parsed: [0, 0, 0, 0],
            isEmpty: true,
            text: '0.0.0.0',
            compare: jasmine.any(Function)
        });
    });
    it('must initialize correctly', function () {
        expect(parse('0.0.0.0')).toEqual({
            major: 0,
            minor: 0,
            patch: 0,
            build: 0,
            parsed: [0, 0, 0, 0],
            isEmpty: true,
            text: '0.0.0.0',
            compare: jasmine.any(Function)
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
            parsed: [1, 2, 3, 4],
            isEmpty: false,
            text: '1.2.3.4',
            compare: jasmine.any(Function)
        });
    });
    it('must support long numbers', function () {
        expect(parse('12345678.22222222.33333333.44444444')).toEqual({
            major: 12345678,
            minor: 22222222,
            patch: 33333333,
            build: 44444444,
            parsed: [12345678, 22222222, 33333333, 44444444],
            isEmpty: false,
            text: '12345678.22222222.33333333.44444444',
            compare: jasmine.any(Function)
        });
    });
    it('must support skipping numbers', function () {
        expect(parse('.7')).toEqual({
            major: 0,
            minor: 7,
            patch: 0,
            build: 0,
            parsed: [0, 7, 0, 0],
            isEmpty: false,
            text: '0.7.0.0',
            compare: jasmine.any(Function)
        });
        expect(parse('...7')).toEqual({
            major: 0,
            minor: 0,
            patch: 0,
            build: 7,
            parsed: [0, 0, 0, 7],
            isEmpty: false,
            text: '0.0.0.7',
            compare: jasmine.any(Function)
        });
        expect(parse('2..7')).toEqual({
            major: 2,
            minor: 0,
            patch: 7,
            build: 0,
            parsed: [2, 0, 7, 0],
            isEmpty: false,
            text: '2.0.7.0',
            compare: jasmine.any(Function)
        });
    });
    it('must ignore all symbols, except digits and dots', function () {
        expect(parse('^1-alfa 2.\t  3 \t4  .  5  .  *  \t')).toEqual({
            major: 12,
            minor: 34,
            patch: 5,
            build: 0,
            parsed: [12, 34, 5, 0],
            isEmpty: false,
            text: '12.34.5.0',
            compare: jasmine.any(Function)
        });
    });
});

describe('version comparison', function () {

    it('must return 0 for equal versions', function () {
        var v1 = parse('1.2.3.4'), v2 = parse('1.2.3.4');
        expect(v1.compare(v2)).toBe(0);
        expect(v2.compare(v1)).toBe(0);
        expect(v1.compare('01.02.03.04')).toBe(0);
    });

    it('must return -1 for lesser versions', function () {
        var v1 = parse('1.2.3.4'), v2 = parse('1.2.3.5');
        expect(v1.compare(v2)).toBe(-1);
        expect(v1.compare('10.2.3.4')).toBe(-1);
    });

    it('must return 1 for greater versions', function () {
        var v1 = parse('1.2.3.4'), v2 = parse('1.2.3.0');
        expect(v1.compare(v2)).toBe(1);
        expect(v1.compare('1.1.3.4')).toBe(1);
    });

});