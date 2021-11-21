import Equal from "@dikac/t-boolean/equal";
/**
 * return data which exists in all array
 *
 * @param validation
 * @param value
 * @constructor
 */
export default function IntersectionParameters(value, validation = Equal) {
    const val = value.slice(0);
    switch (val.length) {
        case 0: return [];
        case 1: return val.shift();
    }
    let intersection = val.shift();
    for (const array of val) {
        intersection = intersection.filter((value1) => {
            for (const value2 of array) {
                if (validation(value1, value2)) {
                    return true;
                }
            }
            return false;
        });
    }
    return intersection;
}
//# sourceMappingURL=intersection-parameters.js.map