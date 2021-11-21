import Validator from "@dikac/t-validator/validator";
import MapPartialParameter, { MapPartialArgument } from "./map-partial-parameter";
import MapPartialParameters from "./map-partial-parameters";
declare namespace MapPartial {
    const Parameter: typeof MapPartialParameter;
    const Parameters: typeof MapPartialParameters;
    type Argument<Validators extends Validator[]> = MapPartialArgument<Validators>;
}
export default MapPartial;
