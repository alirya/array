

export default function MergeParameters<
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
