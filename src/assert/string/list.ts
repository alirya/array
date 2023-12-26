import Value from '@axiona/value/value.js';
import Validatable from '@axiona/validatable/validatable.js';

export function ListParameters(
    value : unknown,
    valid : boolean,
    expect : string,
    subject  = 'type',
    conversion : (value:unknown)=>string = value=>typeof value
) : string {

    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is');

    } else {

        strings.push('must');
    }

    strings.push('list of', expect);

    return strings.join(' ') + '.';
}

export type ListArgument = Value<unknown> & Validatable & {
    expect : string,
    subject : string,
    conversion : (value:unknown)=>string
};

export function ListParameter(
    {
        value,
        valid,
        expect,
        subject,
        conversion,
    } : ListArgument
) : string {

    return ListParameters(value, valid, expect, subject, conversion);
}


namespace List {
    export const Parameters = ListParameters;
    export const Parameter = ListParameter;
    export type Argument = ListArgument;
}
export default List;
