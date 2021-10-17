import ValidateMap from "./validatable/list/map-partial";
import MapCallback from "./map-callback";
import Map from "../message/message/list/map";
import Boolean from "@dikac/t-boolean/boolean";
export default function MapPartial(validators, validation, message = Map, stop = false) {
    if (Boolean(message)) {
        return MapPartial(validators, validation, Map, message);
    }
    return MapCallback(validators, (value, validators) => ValidateMap(value, validators, stop), validation, message);
}
//# sourceMappingURL=map-partial.js.map