import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import MapAllParameters from "./map-all-parameters";
import MapAllParameter, { MapAllArgument } from "./map-all-parameter";
declare namespace MapAll {
    const Parameter: typeof MapAllParameter;
    const Parameters: typeof MapAllParameters;
    type Argument<Validators extends Validator[] = Validator[], ValidatableType extends Validatable = Validatable, MessageType = unknown> = MapAllArgument<Validators, ValidatableType, MessageType>;
}
export default MapAll;
