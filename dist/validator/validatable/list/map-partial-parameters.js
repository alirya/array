export default function MapPartialParameters(values, validators, stop = false) {
    const result = [];
    for (let [property, validator] of validators.entries()) {
        const value = values[property];
        const validatable = validator(value);
        result[property] = validatable;
        if (validatable.valid === stop) {
            return result;
        }
    }
    return result;
}
//# sourceMappingURL=map-partial-parameters.js.map