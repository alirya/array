import Equal from "@dikac/t-boolean/equal";
import Callable from "@dikac/t-function/callable";


/**
 * pick a unique value from {@param value}
 *
 * @param value
 *
 * @param validation
 * to compare value equality
 */
export default function UniqueParameters<Value>(
    value : ReadonlyArray<Value>,
    validation : Callable<[Value, Value], boolean> = Equal
) : Value[] {

    let results : Value[] = [];

    PARENT: for(let index1 in value) {

        for(let result of results) {

            if(validation(value[index1], result)) {

                continue PARENT;
            }
        }

        results.push(value[index1]);
    }

    return results;
}
