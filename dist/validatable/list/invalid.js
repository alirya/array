import EnsureValidatable from "@dikac/t-validatable/ensure/validatable-parameters";
import ValidatableInValid from "@dikac/t-validatable/boolean/invalid";
/**
 * filter all invalid {@link Validatable} while retain its original structure
 */
export default function Invalid(list) {
    return list
        .map((value) => EnsureValidatable(value))
        .filter(ValidatableInValid);
}
//# sourceMappingURL=invalid.js.map