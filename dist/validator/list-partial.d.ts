import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ListPartialParameter, { ListPartialArgument } from "./list-partial-parameter";
import ListPartialParameters from "./list-partial-parameters";
declare namespace ListPartial {
    const Parameter: typeof ListPartialParameter;
    const Parameters: typeof ListPartialParameters;
    type Argument<MessageType = unknown, ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable> = ListPartialArgument<MessageType, ValidatorType, ValidatableType>;
}
export default ListPartial;
