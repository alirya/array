import Value from "@dikac/t-value/value";
import ShuffleParameters from "./shuffle-parameters";
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

export default function ShuffleParameter<Type>(
    {
        value,
        random,
    } : Value<Type[]> & {random ?: ()=>boolean}
) : Type[] {

    return ShuffleParameters(value, random);
}
