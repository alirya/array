import MapCallback from "./map-callback";
/**
 * function factory for {@link MapCallback}
 *
 * type return has better handling by typescript
 */
export default function MapCallbackFunction(validators, map, validation, message) {
    return MapCallback(validators, map, validation, message);
}
//# sourceMappingURL=map-callback-function.js.map