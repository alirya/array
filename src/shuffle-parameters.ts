import Random from "@dikac/t-boolean/random";
/**
 * randomize {@param value} array position
 *
 *
 * @param random
 * random factory to be used to reorder {@param value}
 * non-cryptographic random if not provided
 *
 * @return the same as argument {@param value}
 */

export default function ShuffleParameters<Value>(
    value : Value[],
    random : ()=>boolean = Random
) : Value[] {

    const result : Value[] = [];

    for (const val of value) {

        switch (random()) {
            case true :
                result.push(val);
                break;
            case false :
                result.unshift(val);
                break;
        }
    }

    return result;
}
