import ValidatableMap from "../validatable/map-callback";
/**
 * Base {@link Validator} for validating list of value with list of  {@link Validator}
 *
 * @template MessageT
 * see {@link Validator}
 *
 *
 * @template ValidatorsT
 * list of {@link Validator} to be used against list of value
 *
 * @template ValidatorsT
 * list of {@link Validator} result
 *
 * @template MessageT
 * message type for {@link Message} value
 *
 * @template ValidatableT
 * result {@link Validatable} from {@template Validatables}
 */
export default function MapCallback(validators, map, validation, message) {
    return function (value) {
        return new ValidatableMap(value, validators, map, validation, message);
    };
}
//# sourceMappingURL=map-callback.js.map