import {EqualParameter} from '@alirya/boolean/equal';
import {EqualParameters} from '@alirya/boolean/equal';
import {DifferenceParameters, DifferenceParameter} from '../../dist/difference';


it('enable console.log', () => { spyOn(console, 'log').and.callThrough();});


describe('check equality result', function() {

    let target : number[] = [1,2,3,4,5];
    let compare : number[] = [2,3,4,6];

    // it("default", () => {
    //
    //     expect(DifferenceParameters(target, compare)).toEqual(DifferenceParameter({
    //         list: target,
    //         value: compare,
    //     }))
    // });

    it('with equal', () => {

        expect(DifferenceParameters(target, compare, EqualParameters)).toEqual(DifferenceParameter({
            array: target,
            compare: compare,
            validation:EqualParameter
        }));
    });

});

