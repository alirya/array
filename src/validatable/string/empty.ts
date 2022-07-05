import AssertEmpty from '../../assert/string/empty.js';
import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';

export function EmptyParameters(value : unknown[], valid : boolean) : string {

    return AssertEmpty.Parameters(value, valid);
}

export function EmptyParameter({valid, value} : Readonly<Value<unknown[]> & Validatable>) : string {

    return EmptyParameters(value, valid);
}

namespace Empty {
    export const Parameters = EmptyParameters;
    export const Parameter = EmptyParameter;
}
export default Empty;
