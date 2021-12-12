import Equal from "@dikac/t-boolean/equal";
import Validation from "@dikac/t-boolean/function/validation";

/**
 * get index of first match values
 *
 * @param list
 * @param validation (value : Value, argument : Value) => boolean
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
export default function IndexParameters<Value = unknown>(
    list : ReadonlyArray<Value>,
    validation : Validation<[Value]>,
    start : number = 0,
    end : number = Infinity,
) : number|null {

    const direct = list.findIndex((value, index) => {

        if(index < start) {

            return false;
        }

        if(index > end) {

            return false;
        }

        return validation(value);
    });

    if(direct !== -1) {

        return direct;

    } else {

        return null;
    }


}
