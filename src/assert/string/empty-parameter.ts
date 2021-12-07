import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import EmptyParameters from "./empty-parameters";
/**
 * string intended for empty array
 *
 * @param valid
 * @param value
 * @param subject
 */

export default function EmptyParameter(
    {subject, valid, value} : Readonly<Value<unknown[]> & Validatable> & {subject?:string}
) : string {

    return EmptyParameters(value, valid, subject);
}
