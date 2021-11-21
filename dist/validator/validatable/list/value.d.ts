import Validator from "@dikac/t-validator/validator";
import Value from "@dikac/t-value/value";
import ValueParameters from "./value-parameters";
import ValueParameter, { ValueArgument } from "./value-parameter";
declare namespace Value {
    const Parameters: typeof ValueParameters;
    const Parameter: typeof ValueParameter;
    type Argument<ValueType, Validators extends Validator<unknown, ValueType>[]> = ValueArgument<ValueType, Validators>;
}
export default Value;
