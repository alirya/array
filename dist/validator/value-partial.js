import ValidateValuePartial from "./validatable/list/value-partial";
import ValueCallback from "./value-callback";
/**
 * more specific implementation of {@link ValueCallback}
 *
 * Validate value with list of {@link Validator}
 * stop on encounter that match {@param stop} result from {@link Validator}
 *
 * @param validators
 * list of {@link Validator} to be used against value
 *
 * @param validation
 * combined partial result from {@link Validator} list into {@link Validatable}
 *
 * @param message
 * combined partial result from {@link Validator} list into {@link Message} value
 *
 * @param stop
 * stop validation operation condition
 */
export default function ValuePartial(validators, validation, message, stop = false) {
    return ValueCallback(validators, (value, validators) => ValidateValuePartial(value, validators, stop), validation, message);
}
//# sourceMappingURL=value-partial.js.map