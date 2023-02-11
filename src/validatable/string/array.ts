import ArrayMessage from '../../assert/string/array.js';
import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';
// TODO DEPRECATED?
export function ArrayParameters(
    value : unknown,
    valid : boolean
) : string {

    return ArrayMessage.Parameters(value, valid);
}

export function ArrayParameter({valid, value} : Readonly<Validatable & Value>) : string {

    return ArrayParameters(value, valid);
}

namespace Array {
    export const Parameters = ArrayParameters;
    export const Parameter = ArrayParameter;
}
export default Array;
