import Validator from "@dikac/t-validator/validator";
import MapParameter, {MapArgument} from "./map-parameter";
import MapParameters from "./map-parameters";


namespace Map {

    export const Parameter = MapParameter;
    export const Parameters = MapParameters;
    export type Argument<
        Validators extends Validator[]
    > = MapArgument<
        Validators
    >;
}

export default Map;
