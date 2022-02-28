import InsertFunction from './function/insert-parameters';
/**
 * Insert {@param array} in the specified {@param index}, for reusable and more
 * performant instead use {@see InsertFunction}
 *
 * more information {@see InsertFunction}
 *
 * @param array
 * @param value
 * value to be inserted
 *
 * @param index
 * @param fill
 */

export default function InsertParameters<Value extends unknown>(
    array: Value[],
    value : Value[],
    index : number,
    fill : Value
) : Value[];
export default function InsertParameters<Value extends unknown>(
    array: Value[],
    value : Value[],
    index : number,
) : (Value|undefined)[];
export default function InsertParameters<Value extends unknown>(
    array: (Value|undefined)[],
    value : Value[],
    index : number,
    fill : Value|undefined = undefined
) : (Value|undefined)[] {

    return InsertFunction(array, index, fill)(value);
}
