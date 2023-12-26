import EqualBoolean from '@axiona/boolean/equal.js';

export function EqualUnorderedParameters<Value>(
    array1 : ReadonlyArray<Value>,
    array2 : ReadonlyArray<Value>,
    compare : (value1:Value, value2:Value) => boolean = EqualBoolean.Parameters
) : boolean {

    if(array1.length !== array2.length) {

        return false;
    }

    const valids : (number|string)[] = [];

    PARENT : for(const i in array1) {

        for(const j in array2) {

            if(valids.includes(j)) {

                continue ;
            }

            if(compare(array1[i], array2[j])) {

                valids.push(j);

                continue PARENT;
            }
        }

        return false;
    }

    return array1.length === valids.length;

}

export type EqualUnorderedArgument<Value> = {
    list : [ReadonlyArray<Value>, ReadonlyArray<Value>],
    compare ?: (value1:Value, value2:Value) => boolean
};

export function EqualUnorderedParameter<Value>(
    {
        list:[array1, array2],
        compare
    } : EqualUnorderedArgument<Value>
) : boolean {

    return EqualUnorderedParameters(array1, array2, compare);
}


namespace EqualUnordered {
    export const Parameters = EqualUnorderedParameters;
    export const Parameter = EqualUnorderedParameter;
    export type Argument<Value> = EqualUnorderedArgument<Value>;
}
export default EqualUnordered;
