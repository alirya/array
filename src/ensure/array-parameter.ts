import Value from "@dikac/t-value/value";
import ArrayParameters from "./array-parameters";

export default function ArrayParameter(
    // value : unknown,
    // error : (value:unknown)=>Error = ArrayError,
    {
        value,
        error,
    } : Value<unknown> & {error : (value:unknown)=>Error}
) : unknown[] {

    return ArrayParameters(value, error);
}
