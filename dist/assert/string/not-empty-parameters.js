import Name from "@dikac/t-object/string/name";
/**
 * string intended for not empty array message
 *
 * @param valid
 * @param value
 * @param subject
 */
export default function NotEmptyParameters(value, valid, subject = '') {
    const strings = [];
    strings.push(subject, Name(value));
    if (valid) {
        strings.push('is');
    }
    else {
        strings.push('is not');
    }
    strings.push('empty array');
    return strings.join(' ') + '.';
}
//# sourceMappingURL=not-empty-parameters.js.map