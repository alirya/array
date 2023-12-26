import Validatable from '@axiona/validatable/validatable.js';
import Value from '@axiona/value/value.js';
import ReadonlyList from '../../array/readonly.js';


export function InParameters(
    value : unknown,
    valid : boolean,
    arrays : ReadonlyArray<unknown>,
    subject  = 'value',
) : string {

    const predicate = valid ? 'is' : 'is not';

    return `${subject} ${predicate} in list.`;
}



export type ArrayArgument =
    Validatable &
    Value &
    Readonly<ReadonlyList<unknown>> &
    {
        subject ?: string
    };

export function InParameter({valid, value, array, subject} : ArrayArgument) : string {

    return InParameters(value, valid, array, subject);
}


namespace Array {
    export const Parameters = InParameters;
    export type Argument = ArrayArgument;
    export const Parameter = InParameter;
}
export default Array;
