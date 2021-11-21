import Value from "@dikac/t-value/value";
import Tuple from "./list/tuple";
export declare type ReplaceArgumentValue<Array extends any[], Index extends keyof Array> = Value<Array> & {
    index: Index;
    replace: (value: Array[Index], index: Index) => Array[Index];
};
export declare type ReplaceArgumentList<Array extends any[], Index extends keyof Array> = Tuple<Array> & {
    index: Index;
    replace: (value: Array[Index], index: Index) => Array[Index];
};
export default function ReplaceParameter<Array extends any[], Index extends keyof Array>({ value, index, replace, }: ReplaceArgumentValue<Array, Index>): Array;
export default function ReplaceParameter<Array extends any[], Index extends keyof Array>({ list, index, replace, }: ReplaceArgumentList<Array, Index>): Array;
