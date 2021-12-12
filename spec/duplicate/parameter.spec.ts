import DuplicateParameters from "../../dist/duplicate-parameters";
import DuplicateParameter from "../../dist/duplicate-parameter";
import EqualParameter from "@dikac/t-boolean/equal-parameter";
import EqualParameters from "@dikac/t-boolean/equal-parameters";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


describe("check equality result", function() {

    it(`default`, () => {

        let argument = [0,1,2,3,4,5,1];
        let parameters = DuplicateParameters(argument);
        let parameter = DuplicateParameter({array:argument});

        expect(parameters).withContext('length').toEqual(parameter);
    });

    it(`with validation`, () => {

        let argument = [0,1,2,3,4,5,1];
        let parameters = DuplicateParameters(argument, EqualParameters);
        let parameter = DuplicateParameter({array:argument, validation:EqualParameter});

        expect(parameters).withContext('length').toEqual(parameter);
    });


});





