import {DifferenceBothParameters, DifferenceBothParameter} from '../../dist/difference-both.js';
import {EqualParameter, EqualParameters} from '@axiona/boolean/equal.js';


it('enable console.log', () => { spyOn(console, 'log').and.callThrough();});


describe('check equality result', function() {

    const target : number[] = [1,2,3,4,5];
    const compare : number[] = [2,3,4,6];
    const equal = EqualParameters;

    it('default', () => {

        expect(DifferenceBothParameters(target, compare)).toEqual(DifferenceBothParameter({
            array:[target, compare]
        }));
    });

    it('with equal', () => {

        expect(DifferenceBothParameters(target, compare, equal)).toEqual(DifferenceBothParameter({
            array:[target, compare],
            validation:EqualParameter
        }));
    });

});

