import EqualParameters from "./equal-parameters";

export default function EqualParameter<Value>(
    //array1 : ReadonlyArray<Value>,
    //array2 : ReadonlyArray<Value>,
    //compare : (value1:Value, value2:Value) => boolean = EqualBoolean,
    {
        list:[array1, array2],
        compare
    } : {
        list : [ReadonlyArray<Value>, ReadonlyArray<Value>],
        compare ?: (value1:Value, value2:Value) => boolean
    }
) : boolean {

    return EqualParameters(array1, array2, compare)

}
