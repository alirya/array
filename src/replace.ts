import Value from '@alirya/value/value';
import Tuple from './array/tuple';

export function ReplaceParameters<Array extends any[], Index extends keyof Array>(
    value : Array,
    index : Index,
    replace : (value : Array[Index], index : Index) => Array[Index]
) : Array {

    value[index] = replace(value[index], index);

    return value;
}

export type ReplaceArgumentValue<Array extends any[], Index extends keyof Array> =
    Value<Array> & {
    index : Index,
    replace : (value : Array[Index], index : Index) => Array[Index]
};

export type ReplaceArgumentList<Array extends any[], Index extends keyof Array> =
    Tuple<Array> & {
    index : Index,
    replace : (value : Array[Index], index : Index) => Array[Index]
};

export function ReplaceParameter<Array extends any[], Index extends keyof Array>(
    {
        value,
        index,
        replace,
    } : ReplaceArgumentValue<Array, Index>
) : Array;

export function ReplaceParameter<Array extends any[], Index extends keyof Array>(
    {
        array,
        index,
        replace,
    } : ReplaceArgumentList<Array, Index>
) : Array;

export function ReplaceParameter<Array extends any[], Index extends keyof Array>(
    {
        array,
        value,
        index,
        replace,
    } : ReplaceArgumentList<Array, Index> & ReplaceArgumentValue<Array, Index>
) : Array {

    return ReplaceParameters(array || value, index, replace);
}


namespace Replace {
    export const Parameters = ReplaceParameters;
    export const Parameter = ReplaceParameter;
    export type ArgumentValue<Array extends any[], Index extends keyof Array> = ReplaceArgumentValue<Array, Index>;
    export type ArgumentList<Array extends any[], Index extends keyof Array> = ReplaceArgumentList<Array, Index>;
}
export default Replace;
