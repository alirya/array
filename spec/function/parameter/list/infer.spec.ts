import ParameterInfer from "../../../../dist/function/parameter/list/infer";
import Reset from "../../../../dist/reset";
import Boolean from "@dikac/t-boolean/boolean";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


describe('compiler compatible', function() {


    describe('guard', function() {

        let equal : ParameterInfer<[typeof Boolean, typeof Boolean]> = [[1], [2]];

        // @ts-expect-error
        let more : ParameterInfer<[typeof Boolean, typeof Boolean]> = [[1], [2], [3]];

        // @ts-expect-error
        let less : ParameterInfer<[typeof Boolean, typeof Boolean]> = [[1]];

    });


    describe('return', function() {

        let equal : ParameterInfer<[typeof Reset, typeof Reset]> = [[[]], [[]]];

        // @ts-expect-error
        let more : ParameterInfer<[typeof Reset, typeof Reset]> = [[[]], [[]], [[]]];

        // @ts-expect-error
        let less : ParameterInfer<[typeof Reset, typeof Reset]> = [[[]]];

    });


});
