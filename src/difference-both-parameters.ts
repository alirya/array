import DifferenceLeft from "./difference-parameters";
import Equal from "@dikac/t-boolean/equal";


export default function DifferenceBothParameters<Value>(
    list1: ReadonlyArray<Value>,
    list2 : ReadonlyArray<Value>,
    validation : (value1 : Value, value2 : Value) => boolean = Equal
) : Value[] {

    let left = DifferenceLeft(list1, list2, validation);
    let right = DifferenceLeft(list2, list1, validation);

    return [... new Set<Value>([...left, ...right])]
}
