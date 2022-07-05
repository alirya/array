import EqualBoolean from '@alirya/boolean/equal.js';

export function EqualParameters<Value>(
    array1 : ReadonlyArray<Value>,
    array2 : ReadonlyArray<Value>,
    compare : (value1:Value, value2:Value) => boolean = EqualBoolean.Parameters
) : boolean {

    if(array1.length !== array2.length) {

        return false;
    }

    for(const [index, value] of array1.entries()) {

        if(!compare(value, array2[index])) {

            return false;
        }
    }

    return true;
}

export type EqualArgument<Value> = {
    list : [ReadonlyArray<Value>, ReadonlyArray<Value>],
    compare ?: (value1:Value, value2:Value) => boolean
};

export function EqualParameter<Value>(
    {
        list:[array1, array2],
        compare
    } : EqualArgument<Value>
) : boolean {

    return EqualParameters(array1, array2, compare);
}


namespace Equal {
    export const Parameters = EqualParameters;
    export const Parameter = EqualParameter;
    export type Argument<Value> = EqualArgument<Value>;
}
export default Equal;
