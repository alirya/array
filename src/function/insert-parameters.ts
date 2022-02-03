import Callable from '@alirya/function/callable';

/**
 * Create a function which insert given argument to {@param array} at the specified {@param index}
 *
 * @param array
 * @param index
 * @param fill
 * value to fill when {@param index} exceed {@param array.length}
 */
export default function InsertParameters<Value extends unknown>(
    array: Value[],
    index : number,
    fill : Value
) : Callable<[Value[]], Value[]>;
export default function InsertParameters<Value extends unknown>(
    array: Value[],
    index : number,
) : Callable<[Value[]], (Value|undefined)[]>;
export default function InsertParameters<Value extends unknown>(
    array: (Value|undefined)[],
    index : number,
    fill : Value|undefined = undefined
) : Callable<[Value[]], (Value|undefined)[]> {

    // fill empty
    while(array.length < index) {

        array.push(fill);
    }

    const head = array.slice(0, index);
    const tail = array.slice(index);

    return function (array) {

        return head.concat(array, tail);
    };
}
