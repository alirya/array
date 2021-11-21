

export default function MergeParameters<
    Array extends ReadonlyArray<unknown>
>(
    array : Array,
    ...arrays: Array[]
) : Array {

    const result : any[] = array.slice(0);

    for (const array of arrays) {

        for (const [i, value] of array.entries()) {

            result[i] = value;
        }
    }

    return result as any as Array;
}
