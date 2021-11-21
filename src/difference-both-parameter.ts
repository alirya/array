import Equal from "@dikac/t-boolean/equal";
import Validation from "@dikac/t-boolean/validation/validation";
import Tuple from "./list/tuple";
import DifferenceBothParameters from "./difference-both-parameters";

export default function DifferenceBothParameter<Value>(
    compare : (value1 : Value, value2 : Value) => boolean = Equal,
    {
        list,
        validation
    } : Validation<[Value, Value]> & Tuple<[ReadonlyArray<Value>, ReadonlyArray<Value>]>
) : Value[] {

    return DifferenceBothParameters(...list, validation)
}
