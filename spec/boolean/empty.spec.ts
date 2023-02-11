import Empty from '../../dist/boolean/empty.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


describe('check empty', () => {

    it(`empty`, () => {

        expect(Empty([])).toBe(true);
    });

});

describe('check not empty', () => {

    it(`empty`, () => {

        expect(Empty([1])).toBe(false);
    });

});
