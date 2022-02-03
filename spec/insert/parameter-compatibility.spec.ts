import InsertParameter, {InsertParameterArgument} from "../../dist/insert-parameter";
import InsertParameters from "../../dist/insert-parameters";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

it("auto", function() {

    let argument : InsertParameterArgument<number|string> = {
        array: [1,2,3],
        value : ['a'],
        index : 2,
        fill : undefined
    }

    const parameter = InsertParameter(argument);
    const parameters = InsertParameters(argument.array, argument.value, argument.index, argument.fill);

    expect(parameters).toEqual(parameter);

});



