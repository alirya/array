import Value from "@dikac/t-value/value";
import ArrayParameters from "./array-parameters";

export default function ArrayParameter(
    {
        value,
        error,
    } : Value<unknown> & {error : (value:unknown)=>Error}
) : unknown[] {

    return ArrayParameters(value, error);
}
