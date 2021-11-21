import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Value from "./value";
import ValueCallbackParameter, { ValueCallbackArgument } from "./value-callback-parameter";
import ValueCallbackParameters from "./value-callback-parameters";
declare namespace Value {
    const Parameter: typeof ValueCallbackParameter;
    const Parameters: typeof ValueCallbackParameters;
    type Argument<ValueType, ValidatorList extends Validator[] = Validator[], Results extends Instance[] = Instance[], MessageType = unknown, ValidatableType extends Validatable = Validatable> = ValueCallbackArgument<ValueType, ValidatorList, Results, MessageType, ValidatableType>;
}
export default Value;
