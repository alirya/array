import {DuplicateParameters, DuplicateParameter} from '../../dist/duplicate';
import {EqualParameter} from '@alirya/boolean/equal';
import {EqualParameters} from '@alirya/boolean/equal';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


describe('check equality result', function() {

    it(`default`, () => {

        let argument = [0,1,2,3,4,5,1];
        let parameters = DuplicateParameters(argument);
        let parameter = DuplicateParameter({array:argument});

        expect(parameters).withContext('length').toEqual(parameter);
    });

    it(`with validation`, () => {

        let argument = [0,1,2,3,4,5,1];
        let parameters = DuplicateParameters(argument, EqualParameters);
        let parameter = DuplicateParameter({array:argument, validation:EqualParameter});

        expect(parameters).withContext('length').toEqual(parameter);
    });


});





