import Value from "@dikac/t-value/value";
import ListParameters from "./list-parameters";

export default function ListParameter(
    // string : unknown,
    // expect : string,
    // subject : string = 'type',
    // conversion : (value: unknown)=>string = value=>typeof value,
    {
        value,
        expect,
        subject,
        conversion,
    } :   Value<unknown> & {
    expect : string,
    subject ?: string,
    conversion ?: (value: unknown)=>string,
}
) : Error {

    return ListParameters(value, expect, subject, conversion);
}
