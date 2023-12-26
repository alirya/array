import Value from '@axiona/value/value.js';
import Random from '@axiona/boolean/random.js';
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

export function ShuffleParameters<Value>(
    value : ReadonlyArray<Value>,
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

/**
 *
 * object argument version of {@link ShuffleParameters}
 *
 * @param value
 * @param random
 * @constructor
 */
export function ShuffleParameter<Type>(
    {
        value,
        random,
    } : Value<Type[]> & {random ?: ()=>boolean}
) : Type[] {

    return ShuffleParameters(value, random);
}


namespace Shuffle {
    export const Parameters = ShuffleParameters;
    export const Parameter = ShuffleParameter;
}
export default Shuffle;
