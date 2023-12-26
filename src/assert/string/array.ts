import Validatable from '@axiona/validatable/validatable.js';
import Value from '@axiona/value/value.js';

export function ArrayParameters(
    value : unknown,
    valid : boolean,
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

    strings.push('array');

    if(!valid) {

        strings[2] = `${strings[2]},`;

        strings.push('actual', conversion(value));
    }

    return strings.join(' ') + '.';
}



export type ArrayArgument =
    Validatable &
    Value &
    {
        conversion : (value:unknown)=>string;
        subject: string
    }
;

export function ArrayParameter({valid, value, subject, conversion} : ArrayArgument) : string {

    return ArrayParameters(value, valid, subject, conversion);
}



namespace Array {
    export const Parameters = ArrayParameters;
    export type Argument = ArrayArgument;
    export const Parameter = ArrayParameter;
}
export default Array;
