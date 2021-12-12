import DifferenceBothParameters from "../../dist/difference-both-parameters";
import DifferenceBothParameter from "../../dist/difference-both-parameter";
import EqualParameter from "@dikac/t-boolean/equal-parameter";
import EqualParameters from "@dikac/t-boolean/equal-parameters";
import DifferenceParameters from "../../dist/difference-parameters";
import DifferenceParameter from "../../dist/difference-parameter";


it("enable console.log", () => { spyOn(console, 'log').and.callThrough();});


describe("check equality result", function() {

    let target : number[] = [1,2,3,4,5];
    let compare : number[] = [2,3,4,6];

    // it("default", () => {
    //
    //     expect(DifferenceParameters(target, compare)).toEqual(DifferenceParameter({
    //         list: target,
    //         value: compare,
    //     }))
    // });

    it("with equal", () => {

        expect(DifferenceParameters(target, compare, EqualParameters)).toEqual(DifferenceParameter({
            list: target,
            compare: compare,
            validation:EqualParameter
        }))
    });

});

