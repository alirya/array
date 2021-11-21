/**
 * return all data from {@param list} that does not exists in {@param value}
 *
 * @param list
 * @param value
 * @param validation
 */
export default function DifferenceParameters<Type>(list: ReadonlyArray<Type>, value: ReadonlyArray<Type>, validation?: (target: Type, comparison: Type) => boolean): Type[];
