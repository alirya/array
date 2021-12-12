import ValueInterface from "@dikac/t-value/value";
import Validation from "@dikac/t-boolean/validation/validation";
import List from "./list/list";
import ExtractParameters from "./extract-parameters";


export type ExtractParameterArgument<Value> =
    List<Value> &
    Validation<[Value]> &
    {
        start ?: number,
        end ?: number,
        limit ?: number
    };

export default function ExtractParameter<Value>({
    list,
    validation,
    start,
    end,
    limit
} : ExtractParameterArgument<Value>) : Value[] {

    return ExtractParameters(list, validation, start, end, limit);
}


