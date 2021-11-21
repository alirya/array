import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValuePartialParameters from "./value-partial-parameters";
import ValuePartialParameter, { ValuePartialArgument } from "./value-partial-parameter";
declare namespace ValuePartial {
    const Parameter: typeof ValuePartialParameter;
    const Parameters: typeof ValuePartialParameters;
    type Argument<BaseType = unknown, ValueType extends BaseType = BaseType, Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[], ReturnType extends Validatable = Validatable, MessageType = unknown> = ValuePartialArgument<BaseType, ValueType, Validators, ReturnType, MessageType>;
}
export default ValuePartial;
