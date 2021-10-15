import ValidateValue from "./validatable/list/value";
import ValueCallback from "./value-callback";
/**
 * more specific implementation of {@link ValueCallback}
 *
 * Validate value with all list of {@link Validator}
 *
 * @param validators
 * list of {@link Validator} to be used against value
 *
 * @param validation
 * combined all result from {@link Validator} list into {@link Validatable}
 *
 * @param message
 * combined all result from {@link Validator} list into {@link Message} value
 */
export default function ValueAll(validators, validation, message) {
    return ValueCallback(validators, ValidateValue, validation, message);
}
//# sourceMappingURL=value-all.js.map