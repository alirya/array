import {IncludesParameters} from '../../../dist/assert/string/includes';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

describe('valid',() =>{

    it(`object`, () => {
        expect(IncludesParameters(true, 'type')).toBe(`type is exists in array.`);
    });
    it(`not object`, () => {
        expect(IncludesParameters(true, 'type')).toBe(`type is exists in array.`);
    });
});

describe('invalid',() =>{

    it(`object`, () => {
        expect(IncludesParameters(false, 'type')).toBe(`type is not exists in array.`);
    });

    it(`not object`, () => {
        expect(IncludesParameters(false, 'type')).toBe(`type is not exists in array.`);
    });
});
