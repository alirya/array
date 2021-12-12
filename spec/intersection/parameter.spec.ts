import IntersectionParameters from "../../dist/intersection-parameters";
import IntersectionParameter from "../../dist/intersection-parameter";
import EqualParameter from "@dikac/t-boolean/equal-parameter";
import EqualParameters from "@dikac/t-boolean/equal-parameters";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("check equality result", function() {

    const argument = [[1,2],[3,1],[2,3,1]];

    // it("value", () => {
    //
    //     let parameters = IntersectionParameters(argument);
    //     let parameter = IntersectionParameter({value :argument});
    //     expect(parameters).toEqual(parameter);
    // });

    it("list", () => {

        let parameters = IntersectionParameters(argument);
        let parameter = IntersectionParameter({list :argument});
        expect(parameters).toEqual(parameter);
    });

    // it("value, validation", () => {
    //
    //     let parameters = IntersectionParameters(argument, Equal);
    //     let parameter = IntersectionParameter({list :argument, validation:Equal});
    //     expect(parameters).toEqual(parameter);
    // });
    it("list, validation", () => {

        let parameters = IntersectionParameters(argument, EqualParameters);
        let parameter = IntersectionParameter({list :argument, validation:EqualParameter});
        expect(parameters).toEqual(parameter);
    });
});
