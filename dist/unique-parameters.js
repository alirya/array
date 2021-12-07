import Equal from "@dikac/t-boolean/equal";
/**
 * pick a unique value from {@param value}
 *
 * @param value
 *
 * @param validation
 * to compare value equality
 *
 */
export default function UniqueParameters(value, validation = Equal) {
    let results = [];
    PARENT: for (let index1 in value) {
        for (let result of results) {
            if (validation(value[index1], result)) {
                continue PARENT;
            }
        }
        results.push(value[index1]);
    }
    return results;
}
//# sourceMappingURL=unique-parameters.js.map