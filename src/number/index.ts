import Validation from '@alirya/boolean/function/validation';
import ValidationContainer from '@alirya/boolean/validation/validation';
import Readonly from '../array/readonly';

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
export function IndexParameters<Value = unknown>(
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

export type IndexArgument<Value = unknown> = Readonly<Value> & ValidationContainer<[Value]> & Partial<{
    start: number
    end: number
}>;
/**
 * option version of {@see IndexParameters}
 */
export function IndexParameter<Value = unknown>(
    {
        array,
        validation,
        start = 0,
        end  = Infinity,
    } : IndexArgument<Value>
) : number|null {

    return IndexParameters(array, validation, start, end);
}


namespace Index {
    export const Parameters = IndexParameters;
    export const Parameter = IndexParameter;
    export type Argument<Value = unknown> = IndexArgument<Value>;
}
export default Index;
