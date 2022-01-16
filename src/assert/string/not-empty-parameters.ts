import Name from '@alirya/object/string/name';

/**
 * string intended for not empty array message
 *
 * @param valid
 * @param value
 * @param subject
 */

export default function NotEmptyParameters(
    value : ReadonlyArray<unknown>,
    valid : boolean,
    subject : string = ''
) : string {

    const strings : string[] = [];
    strings.push(subject,  Name(value));

    if(valid) {

        strings.push('is not');

    } else {

        strings.push('is');
    }

    strings.push('empty array');


    return strings.filter(s => s.length).join(' ') + '.';
}
