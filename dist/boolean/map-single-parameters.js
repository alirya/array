export default function MapSingleParameters(values, validations) {
    if (values.length === validations.length) {
        for (let [index, value] of values.entries()) {
            if (!validations[index](value)) {
                return false;
            }
        }
        return true;
    }
    return false;
}
//# sourceMappingURL=map-single-parameters.js.map