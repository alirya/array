import {OrArgument as AndArgument} from './or.js';

export function AndParameters(
    booleans : ReadonlyArray<boolean>,
    defaults  = true
) : boolean {

    if(!booleans.length) {

        return defaults;
    }

    for(const boolean of booleans) {

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
