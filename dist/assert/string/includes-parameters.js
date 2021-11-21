export default function IncludesParameters(valid, subject = '') {
    const strings = [];
    strings.push(subject);
    if (valid) {
        strings.push('is exists in');
    }
    else {
        strings.push('is not exists in');
    }
    strings.push('array');
    return strings.join(' ') + '.';
}
//# sourceMappingURL=includes-parameters.js.map