import ValueInterface from "@dikac/t-value/value";
import List from "./list/list";
import Validation from "@dikac/t-boolean/validation/validation";
import RemovesValuesParameters from "./removes-values-parameters";

export type RemovesValuesArgument<Value> =
    ValueInterface<Iterable<Value>> &
    List<Value> &
    Partial<Validation<[Value, Value]>> &
    {
        start ?: number,
        end ?: number,
        limit ?: number
    }
;

export default function RemovesValuesParameter<Value>({
    list,
    value,
    validation,
    start,
    end,
    limit,
} : RemovesValuesArgument<Value>) : Value[] {

    return RemovesValuesParameters(list, value, validation, start, end, limit);
}

