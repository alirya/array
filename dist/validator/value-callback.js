import ValidatableValue from "../validatable/value-callback";
/**
 * Base {@link Validator} for validating value with list of {@link Validator}
 *
 * @template BaseType
 * see {@link Validator}
 *
 * @template ValueType
 * see {@link Validator}
 *
 * @template MessageType
 * see {@link Validator}
 *
 * @template ValidatorsType
 * list of {@link Validator} to be used against {@template BaseType} or {@template ValueType}
 *
 * @template Validatables
 * result after processing {@template ValidatorsType} with {@template BaseType} or {@template ValueType}
 *
 * @template ValidatableType
 * final result after processing {@template Result}
 */
export default function ValueCallback(validators, map, validation, message) {
    return function (value) {
        return new ValidatableValue(value, validators, map, validation, message);
    };
}
//# sourceMappingURL=value-callback.js.map