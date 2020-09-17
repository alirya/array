export default function List(values, validator) {
    const result = [];
    for (const [property, value] of values.entries()) {
        const validatable = validator.validate(value);
        result[property] = validatable;
    }
    return result;
}
//# sourceMappingURL=list.js.map