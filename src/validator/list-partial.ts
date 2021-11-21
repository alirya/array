import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ListPartialParameter, {ListPartialArgument} from "./list-partial-parameter";
import ListPartialParameters from "./list-partial-parameters";

namespace ListPartial {

    export const Parameter = ListPartialParameter;
    export const Parameters = ListPartialParameters;
    export type Argument<
        MessageType = unknown,
        ValidatorType extends Validator = Validator,
        ValidatableType extends Validatable  = Validatable
    > = ListPartialArgument<
        MessageType,
        ValidatorType,
        ValidatableType
    >;
}
export default ListPartial;
