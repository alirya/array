import Validator from '@axiona/validator/validator.js';
import Type from '@axiona/validator/subject/expectation.js';

type Expectation<Schema extends Validator[]> = {
    [Key in keyof Schema]  : Type<Schema[Key]>
};

export default Expectation;
