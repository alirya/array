import EmptyParameters from "./empty-parameters";
/**
 * string intended for empty array
 *
 * @param valid
 * @param value
 * @param subject
 */
export default function EmptyParameter(
// valid : boolean,
// value : unknown[],
// subject : string = '',
{ subject, valid, value }) {
    return EmptyParameters(value, valid, subject);
}
//# sourceMappingURL=empty-parameter.js.map