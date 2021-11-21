export default function ReplaceParameters<Array extends any[], Index extends keyof Array>(value: Array, index: Index, replace: (value: Array[Index], index: Index) => Array[Index]): Array;
