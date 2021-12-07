import ValidateMap from "./validatable/list/map-partial-parameters";
import MapCallback from "./map-callback-parameters";
import Map from "../message/message/list/map";
export default function MapPartialParameters(validators, validation, message = Map, stop = false) {
    return MapCallback(validators, (value, validators) => ValidateMap(value, validators, stop), validation, message);
}
//# sourceMappingURL=map-partial-parameters.js.map