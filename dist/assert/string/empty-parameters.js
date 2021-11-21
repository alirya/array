import Name from "@dikac/t-object/string/name";
/**
 * string intended for empty array
 *
 * @param valid
 * @param value
 * @param subject
 */
export default function EmptyParameters(value, valid, subject = '') {
    const strings = [];
    strings.push(subject, `"${Name(value)}"`);
    if (valid) {
        strings.push('is');
    }
    else {
        strings.push('must');
    }
    strings.push('empty array');
    return strings.join(' ') + '.';
}
//# sourceMappingURL=empty-parameters.js.map