import ParameterInfer from '../../../../dist/function/parameter/list/infer.js';
import Reset from '../../../../dist/reset.js';
import Boolean from '@axiona/boolean/boolean.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


describe('compiler compatible', function() {


    it('guard', function() {

        const equal : ParameterInfer<[typeof Boolean, typeof Boolean]> = [[1], [2]];

        // @ts-expect-error
        const more : ParameterInfer<[typeof Boolean, typeof Boolean]> = [[1], [2], [3]];

        // @ts-expect-error
        const less : ParameterInfer<[typeof Boolean, typeof Boolean]> = [[1]];

    });


    it('return', function() {

        const equal : ParameterInfer<[typeof Reset, typeof Reset]> = [[[]], [[]]];

        // @ts-expect-error
        const more : ParameterInfer<[typeof Reset, typeof Reset]> = [[[]], [[]], [[]]];

        // @ts-expect-error
        const less : ParameterInfer<[typeof Reset, typeof Reset]> = [[[]]];

    });


});
