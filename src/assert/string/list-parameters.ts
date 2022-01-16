export default function ListParameters(
    value : unknown,
    valid : boolean,
    expect : string,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value
) : string {

    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is');

    } else {

        strings.push('must');
    }

    strings.push('list of', expect);

    return strings.join(' ') + '.';
}
