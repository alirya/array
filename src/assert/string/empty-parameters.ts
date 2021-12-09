import Name from "@dikac/t-object/string/name";

/**
 * string intended for empty array
 *
 * @param valid
 * @param value
 * @param subject
 */

export default function EmptyParameters(
    value : unknown[],
    valid : boolean,
    subject : string = ''
) : string {

    const strings : string[] = [];

    strings.push(subject, `"${Name(value)}"`);

    if(valid) {

        strings.push('is');

    } else {

        strings.push('must');
    }

    strings.push('empty array');

    return strings.filter(v=>v.length).join(' ') + '.';
}

