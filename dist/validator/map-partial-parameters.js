import ValidateMap from "./validatable/list/map-partial-parameters";
import MapCallback from "./map-callback-parameters";
import Map from "../message/message/list/map";
export default function MapPartialParameters(validators, validation, message = Map, stop = false) {
    // if(Boolean(message)) {
    //
    //     return MapPartial(validators, validation, Map, message) as
    //         MapCallbackInterface<Validators, Union<ListStrict<Validators>>, Union<InferMessage<ListStrict<Validators>>>, ValidatableType>;
    // }
    return MapCallback(validators, (value, validators) => ValidateMap(value, validators, stop), validation, message);
}
//# sourceMappingURL=map-partial-parameters.js.map