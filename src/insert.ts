import InsertFunction from './function/insert.js';
import {Omit} from 'utility-types';
import {InsertArgument as InsertFunctionArgument} from './function/insert.js';
import Value from '@alirya/value/value.js';
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

export function InsertParameters<Value extends unknown>(
    array: Value[],
    value : Value[],
    index : number,
    fill : Value
) : Value[];
export function InsertParameters<Value extends unknown>(
    array: Value[],
    value : Value[],
    index : number,
) : (Value|undefined)[];
export function InsertParameters<Value extends unknown>(
    array: (Value|undefined)[],
    value : Value[],
    index : number,
    fill : Value|undefined = undefined
) : (Value|undefined)[] {

    return InsertFunction.Parameters(array, index, fill)(value);
}



export interface InsertArgument<Type extends unknown> extends InsertFunctionArgument<Type>, Value<Type[]> {}

/**
 * Object argument version of {@see InsertParameters}
 * @param array
 * @param value
 * @param index
 * @param fill
 */
export function InsertParameter<Value extends unknown>(
    {
        array,
        value,
        index,
        fill,
    } : Required<InsertArgument<Value>>
) : Value[];

export function InsertParameter<Value extends unknown>(
    {
        array,
        value,
        index,
    } : Omit<InsertArgument<Value>, 'fill'>
) : (Value|undefined)[];

export function InsertParameter<Value extends unknown>(
    {
        array,
        value,
        index,
        fill,
    } : InsertArgument<Value>
) : (Value|undefined)[] {

    return InsertParameters(array, value, index, fill);
}


namespace Insert {
    export const Parameters = InsertParameters;
    export const Parameter = InsertParameter;
    export type Argument<Type extends unknown> = InsertArgument<Type>;
}
export default Insert;
