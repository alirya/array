import {ArrayParameters} from '../../../dist/assert/string/array.js';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

describe('valid',() =>{

    it('object', () => {
        expect(ArrayParameters([], true)).toBe('type is array.');
    });
    it('not object', () => {
        expect(ArrayParameters([], true)).toBe('type is array.');
    });
});

describe('invalid',() =>{

    it('object', () => {
        expect(ArrayParameters([], false)).toBe('type must array, actual object.');
    });

    it('not object', () => {
        expect(ArrayParameters([], false)).toBe('type must array, actual object.');
    });
});
