import NotEmpty from '../../dist/boolean/not-empty.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


describe('check empty', () => {

    it('not empty', () => {

        expect(NotEmpty([])).toBe(false);
    });
});

describe('check not empty', () => {

    it('not empty', () => {

        expect(NotEmpty([1])).toBe(true);
    });
});
