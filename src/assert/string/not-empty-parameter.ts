import NotEmptyParameters from "./not-empty-parameters";
import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";

/**
 * string intended for not empty array message
 *
 * @param valid
 * @param value
 * @param subject
 */

export default function NotEmptyParameter(
    {   value,
        valid,
        subject
    } : Value<any[]> & Validatable & {
        subject : string,
    }
) : string {

    return NotEmptyParameters(value, valid, subject)
}
