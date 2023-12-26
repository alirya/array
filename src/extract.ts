import Index from './number/index.js';
import Validation from '@axiona/boolean/function/validation.js';
import Reset from './void/reset.js';
import ValidationContainer from '@axiona/boolean/validation/validation.js';
import List from './array/list.js';

export function ExtractParameters<Value>(
    list : Value[],
    validation : Validation<[Value]>,
    start  = 0,
    end  = Infinity,
    limit  = Infinity
) : Value[] {

    const extracted : Value[]  = [];

    let index : number|null = 0;

    while (limit) {

        index = Index.Parameters(list as Value[], validation, start + index, end);

        if(index === null) {

            break;
        }

        extracted.push(list[index]);

        delete list[index];

        limit--;
    }

    Reset(list);

    return extracted;
}



export type ExtractArgument<Value> =
    List<Value> &
    ValidationContainer<[Value]> &
    {
        start ?: number,
        end ?: number,
        limit ?: number
    };

export function ExtractParameter<Value>({
    array,
    validation,
    start,
    end,
    limit
} : ExtractArgument<Value>) : Value[] {

    return ExtractParameters(array, validation, start, end, limit);
}



namespace Extract {
    export const Parameters = ExtractParameters;
    export const Parameter = ExtractParameter;
    export type Argument<Value> = ExtractArgument<Value>;
}
export default Extract;
