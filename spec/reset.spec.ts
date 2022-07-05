import Reset from '../dist/reset.js';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});


describe('skip', function() {

    const array : number[] = [];
    array[0] = 1;
    array[3] = 2;
    array[50] = 3;
    array[1000] = 4;
    array[1001] = 5;

    const reset = Reset(array);

    it('removed', () => expect(array).not.toEqual(reset));

    for (let i = 0; i < 4; i++) {

        it(`item ${i}`, () => expect(reset[i]).toBe(i+1));
    }

});


describe('unordered set', function() {

    const array : number[] = [];

    array[1001] = 5;
    array[1000] = 4;
    array[50] = 3;
    array[3] = 2;
    array[0] = 1;

    const reset = Reset(array);

    it('removed', () => expect(array).not.toEqual(reset));

    for (let i = 0; i < 4; i++) {

        it(`item ${i}`, () => expect(reset[i]).toBe(i+1));
    }

});
