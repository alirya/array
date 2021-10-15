export default function Map(values, validators) {
    const result = [];
    for (let [property, validator] of validators.entries()) {
        const value = values[property];
        const validatable = validator(value);
        result[property] = validatable;
    }
    return result;
}
//# sourceMappingURL=map.js.map