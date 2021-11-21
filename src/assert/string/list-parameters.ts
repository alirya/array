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

        strings.push('must');

    } else {

        strings.push('is');
    }

    return strings.join(' ') + '.';
}
