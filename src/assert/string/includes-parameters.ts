export default function IncludesParameters(
    valid : boolean,
    subject : string = '',
) : string {

    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is exists in');

    } else {

        strings.push('is not exists in');

    }

    strings.push('array');

    return strings.join(' ') + '.';

}
