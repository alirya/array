import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import MapPartialParameter, {MapPartialArgument} from "./map-partial-parameter";
import MapPartialParameters from "./map-partial-parameters";

namespace MapPartial {

    export const Parameter = MapPartialParameter;
    export const Parameters = MapPartialParameters;
    export type Argument<
        Validators extends Validator[] = Validator[],
        ValidatableType extends Validatable = Validatable,
        MessageType = unknown,
    > = MapPartialArgument<
        Validators,
        ValidatableType,
        MessageType
    >;
}

export default MapPartial;
