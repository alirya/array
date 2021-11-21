import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Value from "./value";
import ValueCallbackParameter, {ValueCallbackArgument} from "./value-callback-parameter";
import ValueCallbackParameters from "./value-callback-parameters";

namespace Value {

    export const Parameter = ValueCallbackParameter;
    export const Parameters = ValueCallbackParameters;
    export type Argument<
        ValueType,
        ValidatorList extends Validator[] = Validator[],
        Results extends Instance[] = Instance[],
        MessageType = unknown,
        ValidatableType extends Validatable = Validatable
    > = ValueCallbackArgument<
        ValueType,
        ValidatorList,
        Results,
        MessageType,
        ValidatableType
    >;
}

export default Value;
