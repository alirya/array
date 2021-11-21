import RandomBoolean from "@dikac/t-boolean/random";
/**
 * pick a random values
 *
 * @param value
 * @param random
 */
export default function RandomParameters(value, random = RandomBoolean) {
    let gets = [];
    for (let data of value) {
        if (random()) {
            gets.push(data);
        }
    }
    return gets;
}
//# sourceMappingURL=random-parameters.js.map