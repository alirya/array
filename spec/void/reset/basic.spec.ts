import Reset from '../../../dist/void/reset.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


it('explicit set', () =>{

    const argument = [0, 1, undefined, undefined, 3, 4, 5, undefined];

    Reset(argument);

    expect(argument).toEqual(argument);

});


it('deleted', () =>{

    const argument = [0, 1, 'del1', 'del2', 3, 4, 5, 'del3'];

    for (const [i, value] of argument.entries()) {

        if(typeof value === 'string') {

            delete argument[i];
        }
    }

    Reset(argument);

    expect(argument).toEqual([0, 1, 3, 4, 5]);

});
