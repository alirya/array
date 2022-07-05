import Validator from '@alirya/validator/validator.js';

export default interface Validators<
    ValidatorsT extends Validator[] = Validator[]
> {

    validators : ValidatorsT;
}
