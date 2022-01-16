import Message from '../../../dist/assert/string/includes-parameters';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

describe('valid',() =>{

    it(`object`, () => {
        expect(Message(true, 'type')).toBe(`type is exists in array.`);
    });
    it(`not object`, () => {
        expect(Message(true, 'type')).toBe(`type is exists in array.`);
    });
});

describe('invalid',() =>{

    it(`object`, () => {
        expect(Message(false, 'type')).toBe(`type is not exists in array.`);
    });

    it(`not object`, () => {
        expect(Message(false, 'type')).toBe(`type is not exists in array.`);
    });
});
