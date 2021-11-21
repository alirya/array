import Validator from "@dikac/t-validator/validator";
import MapParameter, { MapArgument } from "./map-parameter";
import MapParameters from "./map-parameters";
declare namespace Map {
    const Parameter: typeof MapParameter;
    const Parameters: typeof MapParameters;
    type Argument<Validators extends Validator[]> = MapArgument<Validators>;
}
export default Map;
