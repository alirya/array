import ArrayType from "../string/array-parameters";
import Value from "@dikac/t-value/value";

export default function ArrayParameter(
    {
        value,
        subject,
        conversion,
    } : Value<unknown> & {
        subject ?: string,
        conversion ?: (value: unknown)=>string
    }
) : Error {

    return new Error(ArrayType(value, false, subject, conversion))
}
