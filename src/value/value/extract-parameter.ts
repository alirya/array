import ValueInterface from "@dikac/t-value/value";
import List from "../../array/list";
import ExtractParameters from "./extract-parameters";

/**
 * get and remove selected value
 *
 * @param array
 * @param index
 * if negative will start at the end
 *
 */
export default function ExtractParameter<Data>({
    value,
    index,
} : ValueInterface<Data[]> & {index: number}): Data | undefined;

export default function ExtractParameter<Data>({
    array,
    index,
} : List<Data> & {index: number}): Data | undefined;

export default function ExtractParameter<Data>({
    value,
    index,
    array,
} : List<Data> & ValueInterface<Data[]> & {index: number}): Data | undefined {

    return ExtractParameters(value || array, index);
}
