import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import MapPartialParameter, { MapPartialArgument } from "./map-partial-parameter";
import MapPartialParameters from "./map-partial-parameters";
declare namespace MapPartial {
    const Parameter: typeof MapPartialParameter;
    const Parameters: typeof MapPartialParameters;
    type Argument<Validators extends Validator[] = Validator[], ValidatableType extends Validatable = Validatable, MessageType = unknown> = MapPartialArgument<Validators, ValidatableType, MessageType>;
}
export default MapPartial;
