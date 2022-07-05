import Last from '../../../dist/value/value/last.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('sequence', () => {

    const array : number[] = [1,2,3,4,5];

    expect(Last(array)).toBe(5);
});


it('skipped', () => {

    const array : number[] = [];
    array[5] = 1;
    array[6] = 2;
    array[7] = 3;
    array[8] = 4;
    array[9] = 5;
    // @ts-ignore
    array[10] = undefined;

    expect(Last(array)).toBe(5);
});

it('empty', () => {

    const array : number[] = [];

    expect(Last(array)).toBe(undefined);
});
