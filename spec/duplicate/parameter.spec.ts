import {DuplicateParameters, DuplicateParameter} from '../../dist/duplicate.js';
import {EqualParameter} from '@alirya/boolean/equal.js';
import {EqualParameters} from '@alirya/boolean/equal.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


describe('check equality result', function() {

    it('default', () => {

        const argument = [0,1,2,3,4,5,1];
        const parameters = DuplicateParameters(argument);
        const parameter = DuplicateParameter({array:argument});

        expect(parameters).withContext('length').toEqual(parameter);
    });

    it('with validation', () => {

        const argument = [0,1,2,3,4,5,1];
        const parameters = DuplicateParameters(argument, EqualParameters);
        const parameter = DuplicateParameter({array:argument, validation:EqualParameter});

        expect(parameters).withContext('length').toEqual(parameter);
    });


});





