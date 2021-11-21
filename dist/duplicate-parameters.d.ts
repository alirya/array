import Callable from "@dikac/t-function/callable";
/**
 * pick a duplicate value from {@param list}
 *
 * @param list
 *
 * @param validation
 * to compare value equality
 *
 */
export default function DuplicateParameters<Value>(list: ReadonlyArray<Value>, validation?: Callable<[Value, Value], boolean>): Value[];
