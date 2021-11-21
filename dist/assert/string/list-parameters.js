export default function ListParameters(value, valid, expect, subject = 'type', conversion = value => typeof value) {
    const strings = [];
    strings.push(subject);
    if (valid) {
        strings.push('must');
    }
    else {
        strings.push('is');
    }
    return strings.join(' ') + '.';
}
//# sourceMappingURL=list-parameters.js.map