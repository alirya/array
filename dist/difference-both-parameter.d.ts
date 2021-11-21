import Validation from "@dikac/t-boolean/validation/validation";
import Tuple from "./list/tuple";
export default function DifferenceBothParameter<Value>(compare: ((value1: Value, value2: Value) => boolean) | undefined, { list, validation }: Validation<[Value, Value]> & Tuple<[ReadonlyArray<Value>, ReadonlyArray<Value>]>): Value[];
