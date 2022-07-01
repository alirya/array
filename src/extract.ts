import Index from './number/index';
import Validation from '@alirya/boolean/function/validation';
import Reset from './void/reset';
import ValidationContainer from '@alirya/boolean/validation/validation';
import List from './array/list';

export function ExtractParameters<Value>(
    list : Value[],
    validation : Validation<[Value]>,
    start : number = 0,
    end : number = Infinity,
    limit : number = Infinity
) : Value[] {

    let extracted : Value[]  = [];

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
