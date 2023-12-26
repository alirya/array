import Random from '../../../../dist/value/value/random.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('sequence', () => {

    const array : number[] = [1,2,3,4,5];
    const value : number = Random(array) as number;

    expect(array.includes(value)).toBeTrue();
});

