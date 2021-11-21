import Callable from "@dikac/t-function/callable";
/**
 * pick a unique value from {@param value}
 *
 * @param value
 *
 * @param validation
 * to compare value equality
 *
 */
export default function UniqueParameters<Value>(value: ReadonlyArray<Value>, validation?: Callable<[Value, Value], boolean>): Value[];
