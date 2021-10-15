import ListCallback from "./list-callback";
import ValidateMap from "./validatable/list/list";
/**
 * more specific implementation of {@link ListCallback}
 *
 * Validate list of value with {@link Validator}
 *
 * @param validator
 * to be used against list of value
 *
 * @param validation
 * process all result from {@link Validator} list into {@link Validatable}
 *
 * @param message
 * process all result from {@link Validator} list into {@link Message} value
 */
export default function ListAll(validator, validation, message) {
    return ListCallback(validator, ValidateMap, validation, message);
}
//# sourceMappingURL=list-all.js.map