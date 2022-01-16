import Validator from "@alirya/validator/validator";

export default interface Validators<
    ValidatorsT extends Validator[] = Validator[]
> {

    validators : ValidatorsT;
}
