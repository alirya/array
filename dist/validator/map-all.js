import ValidateMap from "./validatable/list/map";
import MapCallback from "./map-callback";
/**
 * more specific implementation of {@link MapCallback}
 *
 * Validate list of value with list of {@link Validator}, according to their indexes
 *
 * @param validators
 * list of {@link Validator} to be used against list of value
 *
 * @param validation
 * process all result from {@link Validator} list into {@link Validatable}
 *
 * @param message
 * process all result from {@link Validator} list into {@link Message} value
 */
export default function MapAll(validators, validation, message) {
    return MapCallback(validators, ValidateMap, validation, message);
}
//# sourceMappingURL=map-all.js.map