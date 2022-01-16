import ParameterInfer from "../../../../dist/function/parameter/list/infer";
import Reset from "../../../../dist/reset";
import Boolean from "@alirya/boolean/boolean";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


describe('compiler compatible', function() {


    describe('guard', function() {

        let equal : ParameterInfer<[typeof Boolean, typeof Boolean]> = [[1], [2]];

        // @ts-expecerror
        let more : ParameterInfer<[typeof Boolean, typeof Boolean]> = [[1], [2], [3]];

        // @ts-expecerror
        let less : ParameterInfer<[typeof Boolean, typeof Boolean]> = [[1]];

    });


    describe('return', function() {

        let equal : ParameterInfer<[typeof Reset, typeof Reset]> = [[[]], [[]]];

        // @ts-expecerror
        let more : ParameterInfer<[typeof Reset, typeof Reset]> = [[[]], [[]], [[]]];

        // @ts-expecerror
        let less : ParameterInfer<[typeof Reset, typeof Reset]> = [[[]]];

    });


});
