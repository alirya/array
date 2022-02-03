import Array from "../array/array";
import {Omit} from "utility-types";
import InsertParameters from "./insert-parameters";
import Callable from "@alirya/function/callable";

export interface InsertParameterArgument<Value extends unknown> extends Array<Value[]> {
    index : number,
    fill ?: Value
}
/**
 * Object argument version of {@see InsertParameters}
 *
 * @param array
 * @param value
 * @param index
 * @param fill
 */
export default function InsertParameter<Value extends unknown>(
    {
        array,
        index,
        fill,
    } : Required<InsertParameterArgument<Value>>
) : Callable<[Value[]], Value[]>;

export default function InsertParameter<Value extends unknown>(
    {
        array,
        index,
    } : Omit<InsertParameterArgument<Value>, 'fill'>
) : Callable<[Value[]], (Value|undefined)[]>;

export default function InsertParameter<Value extends unknown>(
    {
        array,
        index,
        fill,
    } : InsertParameterArgument<Value>
) : Callable<[Value[]], (Value|undefined)[]> {

    return InsertParameters(array, index, fill);
}
