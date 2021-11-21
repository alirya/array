import Validator from "@dikac/t-validator/validator";
import ValuePartialParameter, { ValuePartialArgument } from "./value-partial-parameter";
import ValuePartialParameters from "./value-partial-parameters";
declare namespace ValuePartial {
    const Parameter: typeof ValuePartialParameter;
    const Parameters: typeof ValuePartialParameters;
    type Argument<ValueType, Validators extends Validator<unknown, ValueType>[]> = ValuePartialArgument<ValueType, Validators>;
}
export default ValuePartial;
