import DifferenceLeft from "./difference-parameters";
import Equal from "@alirya/boolean/equal";

/**
 * return values which does not exist in both list
 *
 * @param list1
 * @param list2
 * @param validation
 *
 *
 * @example
 * ([1,2,3], [1,2,4]) => [3, 4]
 */
export default function DifferenceBothParameters<Value>(
    list1: ReadonlyArray<Value>,
    list2 : ReadonlyArray<Value>,
    validation : (value1 : Value, value2 : Value) => boolean = Equal
) : Value[] {

    let left = DifferenceLeft(list1, list2, validation);
    let right = DifferenceLeft(list2, list1, validation);

    return [... new Set<Value>([...left, ...right])]
}
