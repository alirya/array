export default function MergeParameter({ value, list }) {
    const result = value.slice(0);
    for (const array of list) {
        for (const [i, value] of array.entries()) {
            result[i] = value;
        }
    }
    return result;
}
//# sourceMappingURL=merge-parameter.js.map