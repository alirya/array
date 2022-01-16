import Message from '../../../dist/assert/string/not-empty-parameters';


it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

describe('valid',() =>{

    it(`empty`, () => {
        expect(Message([], true)).toBe(`Array is not empty array.`);
    });
    it(`not empty`, () => {
        expect(Message([], true)).toBe(`Array is not empty array.`);
    });
});

describe('invalid',() =>{

    it(`empty`, () => {
        expect(Message([], false)).toBe(`Array is empty array.`);
    });
    it(
        `not empty`, () => {
        expect(Message([], false)).toBe(`Array is empty array.`);
    });
});
