import Validator from '@axiona/validator/validator.js';

export default interface Validators<
    ValidatorsT extends Validator[] = Validator[]
> {

    validators : ValidatorsT;
}
