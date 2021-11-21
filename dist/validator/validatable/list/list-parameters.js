export default function ListParameters(values, validator) {
    const result = [];
    for (const [property, value] of values.entries()) {
        const validatable = validator(value);
        result[property] = validatable;
    }
    return result;
}
//# sourceMappingURL=list-parameters.js.map