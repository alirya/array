export default function ValuePartialParameters(value, validators, stop = false) {
    const result = [];
    for (const [property, validator] of validators.entries()) {
        const validatable = validator(value);
        result[property] = validatable;
        if (validatable.valid === stop) {
            return result;
        }
    }
    return result;
}
//# sourceMappingURL=value-partial-parameters.js.map