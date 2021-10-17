import ValidatableListCallback from "../validatable/list-callback";
/**
 * Base {@link Validator} for validating list of value with {@link Validator}
 *
 * @template ValueT
 * see {@link Validator}
 *
 * @template MessageT
 * see {@link Validator}
 *
 * @template ValidatorsT
 * to be used against list of value
 *
 * @template Validatables
 * result after processing {@template ValidatorsT} with {@template BaseT} or {@template ValueT}
 *
 * @template ValidatableT
 * final result after processing {@template Result}
 */
export default function ListCallback(validator, map, validation, message) {
    return function (value) {
        return new ValidatableListCallback(value, validator, map, validation, message);
    };
}
//# sourceMappingURL=list-callback.js.map