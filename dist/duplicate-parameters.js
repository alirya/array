import Equal from "@dikac/t-boolean/equal";
/**
 * pick a duplicate value from {@param list}
 *
 * @param list
 *
 * @param validation
 * to compare value equality
 *
 */
export default function DuplicateParameters(list, validation = Equal) {
    let duplicates = [];
    for (let [index1, value1] of list.entries()) {
        for (let [index2, value2] of list.entries()) {
            if (index1 === index2) {
                continue;
            }
            if (validation(value1, value2)) {
                duplicates.push(value1);
                break;
            }
        }
    }
    return duplicates;
}
//# sourceMappingURL=duplicate-parameters.js.map