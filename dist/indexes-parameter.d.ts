import ReadonlyList from "./list/readonly";
import ValueInterface from "@dikac/t-value/value";
import Validation from "@dikac/t-boolean/validation/validation";
export default function IndexesParameter<Value, Compare>({ list, value, validation, start, end, }: ReadonlyList<Value> & ValueInterface<Compare> & Partial<Validation<[Value, Compare]>> & {
    start?: number;
    end?: number;
}): number[];
