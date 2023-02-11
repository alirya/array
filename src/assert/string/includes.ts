
export function IncludesParameters(
    valid : boolean,
    subject  = 'value',
) : string {

    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is exists in');

    } else {

        strings.push('is not exists in');

    }

    strings.push('array');

    return strings.filter( v => v.length ).join(' ') + '.';

}


export function IncludesParameter(
    valid : boolean,
    subject  = '',
) : string {

    return IncludesParameters(valid, subject);

}


namespace Includes {
    export const Parameters = IncludesParameters;
    export const Parameter = IncludesParameter;
}
export default Includes;
