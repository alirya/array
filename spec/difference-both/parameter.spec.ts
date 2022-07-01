import {DifferenceBothParameters, DifferenceBothParameter} from '../../dist/difference-both';
import {EqualParameter, EqualParameters} from '@alirya/boolean/equal';


it('enable console.log', () => { spyOn(console, 'log').and.callThrough();});


describe('check equality result', function() {

    let target : number[] = [1,2,3,4,5];
    let compare : number[] = [2,3,4,6];
    let equal = EqualParameters;

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

