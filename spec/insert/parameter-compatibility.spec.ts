import {InsertArgument, InsertParameter, InsertParameters} from '../../dist/insert.js';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('auto', function() {

    const argument : InsertArgument<number|string> = {
        array: [1,2,3],
        value : ['a'],
        index : 2,
        fill : undefined
    };

    const parameter = InsertParameter(argument);
    const parameters = InsertParameters(argument.array, argument.value, argument.index, argument.fill);

    expect(parameters).toEqual(parameter);

});



