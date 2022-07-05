import {IntersectionParameters, IntersectionParameter} from '../../dist/intersection.js';
import {EqualParameter} from '@alirya/boolean/equal.js';
import {EqualParameters} from '@alirya/boolean/equal.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('check equality result', function() {

    const argument = [[1,2],[3,1],[2,3,1]];

    // it("value", () => {
    //
    //     let parameters = IntersectionParameters(argument);
    //     let parameter = IntersectionParameter({value :argument});
    //     expect(parameters).toEqual(parameter);
    // });

    it('list', () => {

        const parameters = IntersectionParameters(argument);
        const parameter = IntersectionParameter({array :argument});
        expect(parameters).toEqual(parameter);
    });

    // it("value, validation", () => {
    //
    //     let parameters = IntersectionParameters(argument, Equal);
    //     let parameter = IntersectionParameter({list :argument, validation:Equal});
    //     expect(parameters).toEqual(parameter);
    // });
    it('list, validation', () => {

        const parameters = IntersectionParameters(argument, EqualParameters);
        const parameter = IntersectionParameter({array :argument, validation:EqualParameter});
        expect(parameters).toEqual(parameter);
    });
});
