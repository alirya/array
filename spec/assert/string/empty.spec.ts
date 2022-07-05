import {EmptyParameters} from '../../../dist/assert/string/empty.js';


it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

describe('valid',() =>{

    it('empty', () => {
        expect(EmptyParameters([], true)).toBe('"Array" is empty array.');
    });
    it('not empty', () => {
        expect(EmptyParameters([], true)).toBe('"Array" is empty array.');
    });
});

describe('invalid',() =>{

    it('empty', () => {
        expect(EmptyParameters([], false)).toBe('"Array" must empty array.');
    });
    it(
        'not empty', () => {
        expect(EmptyParameters([], false)).toBe('"Array" must empty array.');
    });
});
