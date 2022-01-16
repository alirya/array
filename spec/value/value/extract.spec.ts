import Extract from '../../../dist/value/value/extract-parameters';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


describe('exists', function() {
    let array : number[] = [1,2,3,4,5];
    it('index 0', () => expect(Extract(array, 0)).toBe(1));
    it('index 4', () => expect(Extract(array, 4)).toBeUndefined());
    it('index 3', () => expect(Extract(array, 3)).toBe(5));
    it('index -1', () => expect(Extract(array, -1)).toBe(4));
});

describe('undefined', function() {

    let array : number[] = [1,2,3,4,5];
    it('index 5', () => expect(Extract(array, 5)).toBeUndefined());

});
