export default function ListPartial(values, validator, stop = false) {
    const result = [];
    for (const [property, value] of values.entries()) {
        const validatable = validator(value);
        result[property] = validatable;
        if (validatable.valid === stop) {
            return result;
        }
    }
    return result;
}
//# sourceMappingURL=list-partial.js.map