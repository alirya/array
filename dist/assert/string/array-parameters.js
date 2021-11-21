export default function ArrayParameters(value, valid, subject = 'type', conversion = value => typeof value) {
    const strings = [];
    strings.push(subject);
    if (valid) {
        strings.push('must');
    }
    else {
        strings.push('is');
    }
    strings.push('array');
    // let sentence = SentencesMust(valid);
    // sentence.expect.push('array');
    // sentence.subject.push(subject);
    //
    // sentence.comma.push('expect');
    if (!valid) {
        strings.push('actual', conversion(value));
    }
    return strings.join(' ') + '.';
}
//# sourceMappingURL=array-parameters.js.map