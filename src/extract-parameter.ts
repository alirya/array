import Validation from '@alirya/boolean/validation/validation';
import List from './array/list';
import ExtractParameters from './extract-parameters';


export type ExtractParameterArgument<Value> =
    List<Value> &
    Validation<[Value]> &
    {
        start ?: number,
        end ?: number,
        limit ?: number
    };

export default function ExtractParameter<Value>({
    array,
    validation,
    start,
    end,
    limit
} : ExtractParameterArgument<Value>) : Value[] {

    return ExtractParameters(array, validation, start, end, limit);
}


