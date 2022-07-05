import Callable from '@alirya/function/callable.js';
import Array from '../array/array.js';
import {Omit} from 'utility-types';

/**
 * Create a function which insert given argument to {@param array} at the specified {@param index}
 *
 * @param array
 * initial source
 *
 * @param index
 * position to be inserted
 *
 * @param fill
 * value to fill when {@param index} exceed {@param array.length}
 */
export function InsertParameters<Value extends unknown>(
    array: Value[],
    index : number,
    fill : Value
) : Callable<[Value[]], Value[]>;
export function InsertParameters<Value extends unknown>(
    array: Value[],
    index : number,
) : Callable<[Value[]], (Value|undefined)[]>;
export function InsertParameters<Value extends unknown>(
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


export interface InsertArgument<Value extends unknown> extends Array<Value[]> {
    index : number;
    fill ?: Value;
}
/**
 * Object argument version of {@see InsertParameters}
 *
 * @param array
 * @param value
 * @param index
 * @param fill
 */
export function InsertParameter<Value extends unknown>(
    {
        array,
        index,
        fill,
    } : Required<InsertArgument<Value>>
) : Callable<[Value[]], Value[]>;

export function InsertParameter<Value extends unknown>(
    {
        array,
        index,
    } : Omit<InsertArgument<Value>, 'fill'>
) : Callable<[Value[]], (Value|undefined)[]>;

export function InsertParameter<Value extends unknown>(
    {
        array,
        index,
        fill,
    } : InsertArgument<Value>
) : Callable<[Value[]], (Value|undefined)[]> {

    return InsertParameters(array, index, fill);
}


namespace Insert {
    export const Parameters = InsertParameters;
    export const Parameter = InsertParameter;
    export type Argument<Value extends unknown> = InsertArgument<Value>;
}
export default Insert;
