import Equal from "@dikac/t-boolean/equal";
/**
 * return all data from {@param list} that does not exists in {@param value}
 *
 * @param list
 * @param value
 * @param validation
 */
export default function DifferenceParameters(list, value, validation = Equal) {
    let results = [];
    TARGET: for (let target of list) {
        for (let comparison of value) {
            if (validation(target, comparison)) {
                continue TARGET;
            }
        }
        results.push(target);
    }
    return results;
}
//# sourceMappingURL=difference-parameters.js.map