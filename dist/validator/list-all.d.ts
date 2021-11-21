import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ListAllParameter, { ListAllParameterArgument } from "./list-all-parameter";
import ListAllParameters from "./list-all-parameters";
declare namespace ListAll {
    const Parameter: typeof ListAllParameter;
    const Parameters: typeof ListAllParameters;
    type Argument<MessageType = unknown, ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable> = ListAllParameterArgument<MessageType, ValidatorType, ValidatableType>;
}
export default ListAll;
