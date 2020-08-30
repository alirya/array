import Equal from "@dikac/t-boolean/equal";

/**
 * get index of first match values
 *
 * @param array
 * @param value
 * @param validator (value : Value, argument : Value) => boolean
 * value : value from array
 * argument : value from argument
 *
 * @param start
 * start of index, 0 mean from beginning
 *
 * @param end
 * end of index, Infinity mean no ending
 *
 * @constructor
 */
export default function Index<Value = unknown>(
    array : Value[],
    value : Value,
    validator : (value : Value, argument : Value) => boolean = Equal,
    start : number = 0,
    end : number = Infinity,
) : number|null {

    let direct = array.indexOf(value, start);

    if(direct !== -1) {

        return direct;
    }

    for(let i = start; array[i] !== undefined && i <= end; i++) {

        if(validator(array[i], value)) {

            return i;
        }
    }

    return null;
}
