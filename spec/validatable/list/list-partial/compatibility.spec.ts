import {ListPartialParameters} from '../../../../dist/validator/validatable/list/list-partial';
import {StringParameter} from '../../../../../string/dist/validator/string';


describe('check property', function() {

    let lists = ListPartialParameters(['a', 'b', 1, 'd'], StringParameter(), false);

    lists[0].valid;
    lists[1].valid;
    lists[2].valid;
    lists[3].valid;
    lists[4].valid;
    lists[5].valid;

});