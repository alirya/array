import ValueInterface from "@dikac/t-value/value";
import Validation from "@dikac/t-boolean/validation/validation";
import List from "./list/list";
import RemovesValueParameters from "./removes-value-parameters";


export type RemovesValueArgument<Value> =
    ValueInterface<Value> &
    List<Value> &
    Partial<Validation<[Value, Value]>> &
    {
        start ?: number,
        end ?: number,
        limit ?: number
    };

export default function RemovesValueParameter<Value>({
    list,
    value,
    validation,
    start,
    end,
    limit
} : RemovesValueArgument<Value>) : Value[] {

    return RemovesValueParameters(list, value, validation, start, end, limit);
}


