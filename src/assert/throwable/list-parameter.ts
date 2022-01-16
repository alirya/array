import Value from "@alirya/value/value";
import ListParameters from "./lisparameters";

export default function ListParameter(
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
