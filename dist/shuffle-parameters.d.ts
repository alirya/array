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
export default function ShuffleParameters<Value>(value: Value[], random?: () => boolean): Value[];
