import DuplicateParameters from "../../dist/duplicate-parameters";
import DuplicateParameter from "../../dist/duplicate-parameter";
import Equal from "@dikac/t-boolean/equal";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


describe("check equality result", function() {

    it(`default`, () => {

        let argument = [0,1,2,3,4,5,1];
        let parameters = DuplicateParameters(argument);
        let parameter = DuplicateParameter({list:argument});

        expect(parameters).withContext('length').toEqual(parameter);
    });

    it(`with validation`, () => {

        let argument = [0,1,2,3,4,5,1];
        let parameters = DuplicateParameters(argument, Equal);
        let parameter = DuplicateParameter({list:argument, validation:Equal});

        expect(parameters).withContext('length').toEqual(parameter);
    });


});





