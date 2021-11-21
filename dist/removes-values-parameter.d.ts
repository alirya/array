import ValueInterface from "@dikac/t-value/value";
import List from "./list/list";
import Validation from "@dikac/t-boolean/validation/validation";
export declare type RemovesValuesArgument<Value> = ValueInterface<Iterable<Value>> & List<Value> & Partial<Validation<[Value, Value]>> & {
    start?: number;
    end?: number;
    limit?: number;
};
export default function RemovesValuesParameter<Value>({ list, value, validation, start, end, limit, }: RemovesValuesArgument<Value>): Value[];
