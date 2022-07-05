import Validator from '@alirya/validator/validator.js';
import Type from '@alirya/validator/subject/expectation.js';

type Expectation<Schema extends Validator[]> = {
    [Key in keyof Schema]  : Type<Schema[Key]>
};

export default Expectation;
