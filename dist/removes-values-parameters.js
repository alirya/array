import RemovesValue from "./removes-value-parameters";
import Equal from "@dikac/t-boolean/equal";
export default function RemovesValuesParameters(list, value, validation = Equal, start = 0, end = Infinity, limit = Infinity) {
    let removed = [];
    for (const val of value) {
        let _removed = RemovesValue(list, val, validation, start, end, limit);
        limit = limit - _removed.length;
        removed.push(..._removed);
    }
    return removed;
}
//# sourceMappingURL=removes-values-parameters.js.map