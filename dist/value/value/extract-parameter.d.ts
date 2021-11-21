import ValueInterface from "@dikac/t-value/value";
import List from "../../list/list";
/**
 * get and remove selected value
 *
 * @param array
 * @param index
 * if negative will start at the end
 *
 */
export default function ExtractParameter<Data>({ value, index, }: ValueInterface<Data[]> & {
    index: number;
}): Data | undefined;
export default function ExtractParameter<Data>({ list, index, }: List<Data> & {
    index: number;
}): Data | undefined;
