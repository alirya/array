import ValueInterface from "@dikac/t-value/value";
import List from "./list/list";


export default function MergeParameter<
    Array extends ReadonlyArray<unknown>
>(
    {
        list,
        value,
    } : ValueInterface<Array> & List<Array[]>
) : Array {

    const result : any[] = value.slice(0);

    for (const array of list) {

        for (const [i, value] of array.entries()) {

            result[i] = value;
        }
    }

    return result as any as Array;

}
