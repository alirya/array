
export default function ArrayParameters(
    value : unknown,
    valid : boolean,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value
) : string {

    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('must');

    } else {

        strings.push('is');
    }

    strings.push('array');

    // let sentence = SentencesMust(valid);
    // sentence.expect.push('array');
    // sentence.subject.push(subject);
    //
    // sentence.comma.push('expect');

    if(!valid) {

        strings.push('actual', conversion(value));
    }

    return strings.join(' ') + '.';
}

