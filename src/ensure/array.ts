import AssertArray from '../assert/array';
import ArrayError from '../assert/throwable/array';
import Value from '@alirya/value/value';

export function ArrayParameters(
    value : unknown,
    error : (value:unknown)=>Error = ArrayError.Parameters
) : unknown[] {

    AssertArray(value, error);

    return value;
}

export type ArrayArgument = Value<unknown> & {error : (value:unknown)=>Error};

export function ArrayParameter(
    {
        value,
        error,
    } : Value<unknown> & {error : (value:unknown)=>Error}
) : unknown[] {

    return ArrayParameters(value, error);
}


namespace Array {
    export const Parameters = ArrayParameters;
    export const Parameter = ArrayParameter;
    export type Argument = ArrayArgument;
}
export default Array;
