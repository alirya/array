import ValueInterface from "@dikac/t-value/value";
import List from "./list/list";
export default function MergeParameter<Array extends ReadonlyArray<unknown>>({ value, list }: ValueInterface<Array> & List<Array[]>): Array;
