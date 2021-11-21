import Equal from "@dikac/t-boolean/equal";
export default function IndexesParameters(list, value, validation = Equal, start = 0, end = Infinity) {
    let indexes = [];
    for (let i = start; list[i] !== undefined && i <= end; i++) {
        if (validation(list[i], value)) {
            indexes.push(i);
        }
    }
    return indexes;
}
//# sourceMappingURL=indexes-parameters.js.map