import {AndParameters} from '../../dist/boolean/and.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('empty', function() {

    it('default true', () => {

        expect(AndParameters([], false)).toBeFalse();
    });

    it('default false', () => {

        expect(AndParameters([], true)).toBeTrue();
    });

});

describe('true', function() {

    it('default true', () => {

        expect(AndParameters([true, true, true], false)).toBeTrue();
    });

    it('default false', () => {

        expect(AndParameters([true, true, true], true)).toBeTrue();
    });

});

describe('false', function() {

    it('default true', () => {

        expect(AndParameters([false, false, false], false)).toBeFalse();
    });

    it('default false', () => {

        expect(AndParameters([false, false, false], true)).toBeFalse();
    });

});

describe('mixed', function() {

    it('default true', () => {

        expect(AndParameters([false, true, false], false)).toBeFalse();
    });

    it('default false', () => {

        expect(AndParameters([false, true, false], true)).toBeFalse();
    });

});
