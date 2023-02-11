import ArrayType from '../string/array.js';
import Value from '@alirya/value/value.js';

export function ArrayParameters(
    value : unknown,
    subject  = 'type',
    conversion : (value: unknown)=>string = value=>typeof value
) : Error {

    return new Error(ArrayType.Parameters(value, false, subject, conversion));
}

export type ArrayArgument = Value<unknown> & {
    subject ?: string,
    conversion ?: (value: unknown)=>string
};

export function ArrayParameter(
    {
        value,
        subject,
        conversion,
    } : ArrayArgument
) : Error {

    return ArrayParameters(value, subject, conversion);
}


namespace Array {
    export const Parameters = ArrayParameters;
    export const Parameter = ArrayParameter;
    export type Argument = ArrayArgument;
}
export default Array;
