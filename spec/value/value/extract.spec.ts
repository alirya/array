import Extract from '../../../dist/value/value/extract.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


describe('exists', function() {
    const array : number[] = [1,2,3,4,5];
    it('index 0', () => expect(Extract.Parameters(array, 0)).toBe(1));
    it('index 4', () => expect(Extract.Parameters(array, 4)).toBeUndefined());
    it('index 3', () => expect(Extract.Parameters(array, 3)).toBe(5));
    it('index -1', () => expect(Extract.Parameters(array, -1)).toBe(4));
});

describe('undefined', function() {

    const array : number[] = [1,2,3,4,5];
    it('index 5', () => expect(Extract.Parameters(array, 5)).toBeUndefined());

});
