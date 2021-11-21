import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/dynamic";
import ListCallbackParameters from "./list-callback-parameters";
import ListCallbackParameter, {ValueCallbackArgument} from "./list-callback-parameter";

namespace ListCallback {

    export const Parameters = ListCallbackParameters;
    export const Parameter = ListCallbackParameter;
    export type Argument<
        ValueType extends unknown[],
        ValidatorType extends Validator = Validator,
        Results extends Instance[] = Instance[],
        MessageType = unknown,
        ValidatableType extends Validatable = Validatable
    > = ValueCallbackArgument<
        ValueType,
        ValidatorType,
        Results,
        MessageType,
        ValidatableType
    >;
}

export default ListCallback;



