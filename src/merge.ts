import ValueInterface from '@alirya/value/value';
import List from './array/list';


export function MergeParameters<
    Array extends ReadonlyArray<unknown>
>(
    value : Array,
    ...arrays: Array[]
) : Array {

    const result : any[] = value.slice(0);

    for (const array of arrays) {

        for (const [i, value] of array.entries()) {

            result[i] = value;
        }
    }

    return result as any as Array;
}



export function MergeParameter<
    Array extends ReadonlyArray<unknown>
>(
    {
        value,
        array,
    } : ValueInterface<Array> & List<Array>
) : Array {

    return MergeParameters(value, ...array);

}


namespace Merge {
    export const Parameters = MergeParameters;
    export const Parameter = MergeParameter;
}
export default Merge;
