import ValueInterface from "@dikac/t-value/value";
/**
 * pick a random values
 *
 * @param array
 * @param random
 */
export default function RandomParameter<Value>({ value, random }: ValueInterface<ReadonlyArray<Value>> & {
    random?: () => boolean;
}): Value[];
