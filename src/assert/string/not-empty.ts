import Name from '@alirya/object/string/name.js';
import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';

/**
 * string intended for not empty array message
 *
 * @param valid
 * @param value
 * @param subject
 */

export function NotEmptyParameters(
    value : ReadonlyArray<unknown>,
    valid : boolean,
    subject : string = ''
) : string {

    const strings : string[] = [];
    strings.push(subject,  Name(value));

    if(valid) {

        strings.push('is not');

    } else {

        strings.push('is');
    }

    strings.push('empty array');


    return strings.filter(s => s.length).join(' ') + '..js';
}


export type NotEmptyArgument = Value<any[]> & Validatable & {
    subject : string,
};

/**
 * string intended for not empty array message
 *
 * @param valid
 * @param value
 * @param subject
 */

export function NotEmptyParameter(
    {   value,
        valid,
        subject
    } : NotEmptyArgument
) : string {

    return NotEmptyParameters(value, valid, subject);
}


namespace NotEmpty {
    export const Parameters = NotEmptyParameters;
    export const Parameter = NotEmptyParameter;
    export type Argument = NotEmptyArgument;
}
export default NotEmpty;
