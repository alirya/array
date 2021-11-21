import EqualBoolean from "@dikac/t-boolean/equal";
export default function EqualParameters(array1, array2, compare = EqualBoolean) {
    if (array1.length !== array2.length) {
        return false;
    }
    let valids = [];
    PARENT: for (let i in array1) {
        for (let j in array2) {
            if (valids.includes(j)) {
                continue;
            }
            if (compare(array1[i], array2[j])) {
                valids.push(j);
                continue PARENT;
            }
        }
        return false;
    }
    if (array1.length === valids.length) {
        return true;
    }
    return false;
}
//# sourceMappingURL=equal-parameters.js.map