import Equal from "@dikac/t-boolean/equal";
import Callable from "@dikac/t-function/callable";

export default function IndexesParameters<Value, Compare> (
    list : ReadonlyArray<Value>,
    value : Compare,
    validation : Callable<[Value, Compare], boolean> = <Callable<[Value, Compare], boolean>>Equal,
    start : number = 0,
    end : number = Infinity,
) : number[] {

    let indexes : number[] = [];

    for(let i = start; list[i] !== undefined && i <= end; i++) {

        if(validation(list[i], value)) {

            indexes.push(i);
        }
    }

    return indexes;

}
