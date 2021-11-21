import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValueAllParameter, {ValueAllArgument} from "./value-all-parameter";
import ValueAllParameters from "./value-all-parameters";

namespace ValueAll {

    export const Parameter = ValueAllParameter;
    export const Parameters = ValueAllParameters;
    export type Argument<
        BaseType = unknown,
        ValueType extends BaseType = BaseType,
        Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
        ReturnType extends Validatable = Validatable,
        MessageType = unknown,
    > = ValueAllArgument<
        BaseType,
        ValueType,
        Validators,
        ReturnType,
        MessageType
    >;
}
export default ValueAll;
