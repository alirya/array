import Validator from "@dikac/t-validator/validator";
import ValuePartialParameter, {ValuePartialArgument} from "./value-partial-parameter";
import ValuePartialParameters from "./value-partial-parameters";

namespace ValuePartial {

    export const Parameter = ValuePartialParameter;
    export const Parameters = ValuePartialParameters;
    export type Argument<
        ValueType,
        Validators extends Validator<unknown, ValueType>[]
    > = ValuePartialArgument<
        ValueType,
        Validators
    >;
}
export default ValuePartial;
