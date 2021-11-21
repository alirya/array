export default function ValueParameters(value, validators) {
    const result = [];
    for (const [property, validator] of validators.entries()) {
        const validatable = validator(value);
        result[property] = validatable;
    }
    return result;
}
//# sourceMappingURL=value-parameters.js.map