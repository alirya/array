import EmptyMessage from "../../../dist/assert/string/empty-parameters";


it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('valid',() =>{

    it(`empty`, () => {
        expect(EmptyMessage([], true)).toBe(`"Array" is empty array.`);
    });
    it(`not empty`, () => {
        expect(EmptyMessage([], true)).toBe(`"Array" is empty array.`);
    });
});

describe('invalid',() =>{

    it(`empty`, () => {
        expect(EmptyMessage([], false)).toBe(`"Array" must empty array.`);
    });
    it(
        `not empty`, () => {
        expect(EmptyMessage([], false)).toBe(`"Array" must empty array.`);
    });
});
