import Random from "@dikac/t-boolean/random";
/**
 * randomize {@param value} array position
 *
 *
 * @param random
 * random factory to be used to reorder {@param value}
 * non cryptographic random if not provided
 *
 * @return the same as argument {@param value}
 */
export default function ShuffleParameters(value, random = Random) {
    const result = [];
    for (const val of value) {
        switch (random()) {
            case true:
                result.push(val);
                break;
            case false:
                result.unshift(val);
                break;
        }
    }
    return result;
}
//# sourceMappingURL=shuffle-parameters.js.map