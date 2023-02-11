import ListType from '../string/list.js';
import Value from '@alirya/value/value.js';

export function ListParameters(
    value : unknown,
    expect : string,
    subject  = 'type',
    conversion : (value: unknown)=>string = value=>typeof value,
) : Error {

    return new Error(ListType.Parameters(value, false, expect, subject, conversion));
}

export type ListArgument = Value<unknown> & {
    expect : string,
    subject ?: string,
    conversion ?: (value: unknown)=>string,
};


export function ListParameter(
    {
        value,
        expect,
        subject,
        conversion,
    } : ListArgument
) : Error {

    return ListParameters(value, expect, subject, conversion);
}


namespace List {
    export const Parameters = ListParameters;
    export const Parameter = ListParameter;
    export type Argument = ListArgument;
}
export default List;
