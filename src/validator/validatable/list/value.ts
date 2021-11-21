import Validator from "@dikac/t-validator/validator";
import Value from "@dikac/t-value/value";
import ValueParameters from "./value-parameters";
import ValueParameter, {ValueArgument} from "./value-parameter";

namespace Value {

    export const Parameters = ValueParameters;
    export const Parameter = ValueParameter;
    export type Argument<
        ValueType,
        Validators extends Validator<unknown, ValueType>[]
    > = ValueArgument<
        ValueType,
        Validators
    >;
}
export default Value;
