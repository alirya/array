import Validatable from '@alirya/validatable/validatable';
import Value from '@alirya/value/value';
import ArrayParameters from './array-parameters';

export type ArrayArgument =
    Validatable &
    Value &
    {conversion : (value:unknown)=>string} &
    {subject: string}
;

export default function ArrayParameter({valid, value, subject, conversion} : ArrayArgument) : string {

    return ArrayParameters(value, valid, subject, conversion);
}

