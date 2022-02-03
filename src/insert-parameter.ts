import {Omit} from 'utility-types';
import {InsertParameterArgument as InsertParameterFunctionArgument} from './function/insert-parameter';
import InsertParameters from './insert-parameters';
import Value from '@alirya/value/value';


export interface InsertParameterArgument<Type extends unknown> extends InsertParameterFunctionArgument<Type>, Value<Type[]> {}

/**
 * Object argument version of {@see InsertParameters}
 * @param array
 * @param value
 * @param index
 * @param fill
 */
export default function InsertParameter<Value extends unknown>(
    {
        array,
        value,
        index,
        fill,
    } : Required<InsertParameterArgument<Value>>
) : Value[];

export default function InsertParameter<Value extends unknown>(
    {
        array,
        value,
        index,
    } : Omit<InsertParameterArgument<Value>, 'fill'>
) : (Value|undefined)[];

export default function InsertParameter<Value extends unknown>(
    {
        array,
        value,
        index,
        fill,
    } : InsertParameterArgument<Value>
) : (Value|undefined)[] {

    return InsertParameters(array, value, index, fill);
}
