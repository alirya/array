import Callable from "@dikac/t-function/callable";
export default function IndexesParameters<Value, Compare>(list: ReadonlyArray<Value>, value: Compare, validation?: Callable<[Value, Compare], boolean>, start?: number, end?: number): number[];
