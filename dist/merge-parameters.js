export default function MergeParameters(array, ...arrays) {
    const result = array.slice(0);
    for (const array of arrays) {
        for (const [i, value] of array.entries()) {
            result[i] = value;
        }
    }
    return result;
}
//# sourceMappingURL=merge-parameters.js.map