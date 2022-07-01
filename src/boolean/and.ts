import {OrArgument as AndArgument} from './or';

export function AndParameters(
    booleans : ReadonlyArray<boolean>,
    defaults : boolean = true
) : boolean {

    if(!booleans.length) {

        return defaults;
    }

    for(let boolean of booleans) {

        if(!boolean) {

            return false;
        }
    }

    return true;
}


export type {AndArgument};

export function AndParameter(
    {
        defaults,
        array
    } : AndArgument
) : boolean {

    return AndParameters(array, defaults);
}


namespace And {
    export const Parameters = AndParameters;
    export const Parameter = AndParameter;
    export type Argument = AndArgument;
}
export default And;
