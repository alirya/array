import Equal from '@alirya/boolean/equal';
import Callable from '@alirya/function/callable';

/**
 * pick a duplicate value from {@param list}
 *
 * @param list
 *
 * @param validation
 * to compare value equality
 */
export default function DuplicateParameters<Value>(
    list : ReadonlyArray<Value>,
    validation : Callable<[Value, Value], boolean> = Equal
) : Value[] {

    let duplicates : Value[] = [];

    for(let [index1, value1] of list.entries()) {

        for(let [index2, value2] of list.entries()) {

            if(index1 === index2) {

                continue;
            }

            if(validation(value1, value2)) {

                duplicates.push(value1);
                break;
            }
        }
    }

    return duplicates;
}

