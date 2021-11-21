import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ListAllParameter, {ListAllParameterArgument} from "./list-all-parameter";
import ListAllParameters from "./list-all-parameters";

namespace ListAll {

    export const Parameter = ListAllParameter;
    export const Parameters = ListAllParameters;
    export type Argument<
        MessageType = unknown,
        ValidatorType extends Validator = Validator,
        ValidatableType extends Validatable  = Validatable
        > = ListAllParameterArgument<
        MessageType,
        ValidatorType,
        ValidatableType
        >;
}
export default ListAll;
