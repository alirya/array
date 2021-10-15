import ListCallback from "./list-callback";
import ValidateMapPartial from "./validatable/list/list-partial";
/**
 * more specific implementation of {@link ListCallback}
 *
 * Validate list of value with {@link Validator}
 * stop on encounter invalid result from {@link Validator}
 *
 * @param validator
 * to be used against list of value
 *
 * @param validation
 * process all result from {@link Validator} list into {@link Validatable}
 *
 * @param message
 * process all result from {@link Validator} list into {@link Message} value
 *
 * @param stop
 * stop validation operation condition
 */
export default function ListPartial(validator, validation, message, stop = false) {
    return ListCallback(validator, (value, validators) => ValidateMapPartial(value, validators, stop), validation, message);
}
//# sourceMappingURL=list-partial.js.map