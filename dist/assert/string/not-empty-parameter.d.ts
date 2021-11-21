import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
/**
 * string intended for not empty array message
 *
 * @param valid
 * @param value
 * @param subject
 */
export default function NotEmptyParameter({ value, valid, subject }: Value<any[]> & Validatable & {
    subject: string;
}): string;
