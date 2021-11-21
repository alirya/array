export default function DifferenceBothParameters<Value>(list1: ReadonlyArray<Value>, list2: ReadonlyArray<Value>, validation?: (value1: Value, value2: Value) => boolean): Value[];
