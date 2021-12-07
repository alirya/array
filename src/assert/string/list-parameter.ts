import ListParameters from "./list-parameters";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";

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
