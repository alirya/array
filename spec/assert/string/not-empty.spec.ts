import {NotEmptyParameters} from '../../../dist/assert/string/not-empty';


it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

describe('valid',() =>{

    it(`empty`, () => {
        expect(NotEmptyParameters([], true)).toBe(`Array is not empty array.`);
    });
    it(`not empty`, () => {
        expect(NotEmptyParameters([], true)).toBe(`Array is not empty array.`);
    });
});

describe('invalid',() =>{

    it(`empty`, () => {
        expect(NotEmptyParameters([], false)).toBe(`Array is empty array.`);
    });
    it(
        `not empty`, () => {
        expect(NotEmptyParameters([], false)).toBe(`Array is empty array.`);
    });
});
