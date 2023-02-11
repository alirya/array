import {ListPartialParameters} from '../../../../dist/validator/validatable/list/list-partial.js';
import {StringParameter} from '../../../../../string/dist/validator/string.js';


describe('check property', function() {

    const lists = ListPartialParameters(['a', 'b', 1, 'd'], StringParameter(), false);

    lists[0].valid;
    lists[1].valid;
    lists[2].valid;

    try {

        lists[3].valid;
        lists[4].valid;
        lists[5].valid;

    } catch (error) {

        it('check error',() => expect(error).toBeInstanceOf(Error));
    }


});