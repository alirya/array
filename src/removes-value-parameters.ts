import Extract from "./value/value/extract-parameters";
import Index from "./number";
import Equal from "@dikac/t-boolean/equal";

export default function RemovesValueParameters<Value>(
    list : Value[],
    value ?: Value,
    validation : (value1 : Value, value2 : Value)=>boolean = Equal,
    start : number = 0,
    end : number = Infinity,
    limit : number = Infinity
) : Value[] {

    let removed : Value[]  = [];

    while (limit > 0) {

        let index = Index(list as Value[], value, validation, start, end);

        if(index !== null) {

            let value = Extract<Value>(list as Value[], index);

            if(value === undefined) {

                // TODO ADD ERROR
                throw new Error('TODO');
            }

            removed.push(value);
            limit--;

        } else {

            break;
        }
    }

    return  removed;
}



