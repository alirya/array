import ListParameters from './lisparameters';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';

export default function ListParameter(
    {
        value,
        valid,
        expect,
        subject,
        conversion,
    } : Value<unknown> & Validatable & {
        expect : string,
        subject : string,
        conversion : (value:unknown)=>string
    }
) : string {

    return ListParameters(value, valid, expect, subject, conversion);
}
