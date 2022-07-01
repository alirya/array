import Name from '@alirya/object/string/name';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';

/**
 * string intended for empty array
 *
 * @param valid
 * @param value
 * @param subject
 */

export function EmptyParameters(
    value : unknown[],
    valid : boolean,
    subject : string = ''
) : string {

    const strings : string[] = [];

    strings.push(subject, `"${Name(value)}"`);

    if(valid) {

        strings.push('is');

    } else {

        strings.push('must');
    }

    strings.push('empty array');

    return strings.filter(v=>v.length).join(' ') + '.';
}

export type EmptyArgument = Readonly<Value<unknown[]> & Validatable> & {subject?:string};
/**
 * string intended for empty array
 *
 * @param valid
 * @param value
 * @param subject
 */

export function EmptyParameter(
    {
        subject,
        valid,
        value
    } : EmptyArgument
) : string {

    return EmptyParameters(value, valid, subject);
}


namespace Empty {
    export const Parameters = EmptyParameters;
    export const Parameter = EmptyParameter;
    export type Argument = EmptyArgument;
}
export default Empty;
