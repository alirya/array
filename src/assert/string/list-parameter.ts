import ListParameters from "./list-parameters";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";

export default function ListParameter(
    // value : unknown,
    // valid : boolean,
    // expect : string,
    // subject : string = 'type',
    // conversion : (value:unknown)=>string = value=>typeof value,
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
