import ValidateMap from "./validatable/list/map";
import MapCallback from "./map-callback";
import Map from "../message/message/list/map";
export default function MapAll(validators, validation, message = Map) {
    return MapCallback(validators, ValidateMap, validation, message);
}
//# sourceMappingURL=map-all.js.map