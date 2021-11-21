import ValidateMap from "./validatable/list/map-parameters";
import MapCallback from "./map-callback-parameters";
import Map from "../message/message/list/map";
export default function MapAllParameters(validators, validation, message = Map) {
    return MapCallback(validators, ValidateMap, validation, message);
}
//# sourceMappingURL=map-all-parameters.js.map