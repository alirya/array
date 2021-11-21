/**
 * pick a random values
 *
 * @param value
 * @param random
 */
export default function RandomParameters<Value>(value: ReadonlyArray<Value>, random?: () => boolean): Value[];
