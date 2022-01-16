import Reset from '../../../dist/void/reset';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


it('explicit set', () =>{

    let argument = [0, 1, undefined, undefined, 3, 4, 5, undefined];

    Reset(argument);

    expect(argument).toEqual(argument);

});


it('deleted', () =>{

    let argument = [0, 1, 'del1', 'del2', 3, 4, 5, 'del3'];

    for (let [i, value] of argument.entries()) {

        if(typeof value === 'string') {

            delete argument[i];
        }
    }

    Reset(argument);

    expect(argument).toEqual([0, 1, 3, 4, 5]);

});
