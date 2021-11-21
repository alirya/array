import Validator from "@dikac/t-validator/validator";
import MapPartialParameter, {MapPartialArgument} from "./map-partial-parameter";
import MapPartialParameters from "./map-partial-parameters";

namespace MapPartial {

    export const Parameter = MapPartialParameter;
    export const Parameters = MapPartialParameters;
    export type Argument<
        Validators extends Validator[]
        > = MapPartialArgument<
        Validators
        >;
}
export default MapPartial;
