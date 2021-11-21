/**
 * return data which exists in all array
 *
 * @param validation
 * @param value
 * @constructor
 */
export default function IntersectionParameters<Value>(value: ReadonlyArray<ReadonlyArray<Value>>, validation?: (target: Value, comparison: Value) => boolean): Value[];
