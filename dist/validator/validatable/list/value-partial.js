export default function ValuePartial(value, validators, stop = false) {
    const result = [];
    for (const [property, validator] of validators.entries()) {
        const validatable = validator.validate(value);
        result[property] = validatable;
        if (validatable.valid === stop) {
            return result;
        }
    }
    return result;
}
//# sourceMappingURL=value-partial.js.map