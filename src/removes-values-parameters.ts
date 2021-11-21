import RemovesValue from "./removes-value-parameters";
import Equal from "@dikac/t-boolean/equal";

export default function RemovesValuesParameters<Value>(
    list : Value[],
    value : Iterable<Value>,
    validation : (value1 : Value, value2 : Value)=>boolean = Equal,
    start : number = 0,
    end : number = Infinity,
    limit : number = Infinity
) : Value[] {

    let removed : Value[]  = [];

    for (const val of value) {

        let _removed = RemovesValue(list, val, validation, start, end, limit);
        limit = limit - _removed.length;

        removed.push(..._removed);
    }

    return removed;
}
