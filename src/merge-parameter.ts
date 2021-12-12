import ValueInterface from "@dikac/t-value/value";
import List from "./array/list";
import MergeParameters from "./merge-parameters";


export default function MergeParameter<
    Array extends ReadonlyArray<unknown>
>(
    {
        value,
        array,
    } : ValueInterface<Array> & List<Array>
) : Array {

    return MergeParameters(value, ...array);

}
