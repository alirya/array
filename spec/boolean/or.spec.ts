import {OrParameters} from '../../dist/boolean/or.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('empty', function() {

    it('default true', () => {

        expect(OrParameters([], false)).toBeFalse();
    });

    it('default false', () => {

        expect(OrParameters([], true)).toBeTrue();
    });

});

describe('true', function() {

    it('default true', () => {

        expect(OrParameters([true, true, true], false)).toBeTrue();
    });

    it('default false', () => {

        expect(OrParameters([true, true, true], true)).toBeTrue();
    });

});

describe('false', function() {

    it('default true', () => {

        expect(OrParameters([false, false, false], false)).toBeFalse();
    });

    it('default false', () => {

        expect(OrParameters([false, false, false], true)).toBeFalse();
    });

});

describe('mixed', function() {

    it('default true', () => {

        expect(OrParameters([false, true, false], false)).toBeTrue();
    });

    it('default false', () => {

        expect(OrParameters([false, true, false], true)).toBeTrue();
    });

});
