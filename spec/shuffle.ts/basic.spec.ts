import {ShuffleParameters} from '../../dist/shuffle';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('test', function() {

    const target : number[] = [];

    for(let i = 0; i <= 20; i++) {

        target.push(i);
    }

    expect(target).not.toEqual(ShuffleParameters(target));
});
