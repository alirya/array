import ValueInterface from "@alirya/value/value";
import RandomParameters from "./random-parameters";

/**
 * pick a random values
 *
 * @param array
 * @param random
 */
export default function RandomParameter<Value>(
    {
        value,
        random
    } : ValueInterface<ReadonlyArray<Value>> & {random ?: ()=> boolean}
) : Value[] {

    return RandomParameters(value, random);
}
