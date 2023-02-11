import ReturnInfer from '../../../../dist/function/return/list/infer.js';
import Reset from '../../../../dist/reset.js';
import Boolean from '@alirya/boolean/boolean.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


describe('compiler compatible', function() {


    it('guard', function() {

        const equal : ReturnInfer<[typeof Boolean, typeof Boolean]> = [true, false];

        // @ts-expect-error
        const more : ReturnInfer<[typeof Boolean, typeof Boolean]> = [true, false, true];

        // @ts-expect-error
        const less : ReturnInfer<[typeof Boolean, typeof Boolean]> = [true];

    });


    it('return', function() {

        const equal : ReturnInfer<[typeof Reset, typeof Reset]> = [[], []];

        // @ts-expect-error
        const more : ReturnInfer<[typeof Reset, typeof Reset]> = [[], [], []];

        // @ts-expect-error
        const less : ReturnInfer<[typeof Reset, typeof Reset]> = [[]];

    });


});
