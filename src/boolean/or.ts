import Readonly from '../array/readonly';

export function OrParameters(
    list : ReadonlyArray<boolean>,
    defaults : boolean = true
) : boolean {

    if(!list.length) {

        return defaults;
    }

    let result : boolean = false;

    for(let boolean of list) {

        result = result || boolean;

        if(boolean) {

            return true;
        }
    }

    return false;
}


export type OrArgument = Readonly<boolean> & {defaults : boolean};

export function OrParameter(
    {
        array,
        defaults,
    } : OrArgument
) : boolean {

    return OrParameters(array, defaults);
}


namespace Or {
    export const Parameters = OrParameters;
    export const Parameter = OrParameter;
    export type Argument = OrArgument;
}
export default Or;
