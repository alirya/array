import ValueInterface from '@alirya/value/value';
import List from '../../array/list';
/**
 * get and remove selected value
 *
 * @param array
 * @param index
 * if negative will start at the end
 *
 */

export function ExtractParameters<Data>(
    value : Data[],
    index: number,
): Data | undefined {

    return value.splice(index, 1)[0];
}


/**
 * get and remove selected value
 *
 * @param array
 * @param index
 * if negative will start at the end
 *
 */
export function ExtractParameter<Data>({
    value,
    index,
} : ValueInterface<Data[]> & {index: number}): Data | undefined;

export function ExtractParameter<Data>({
    array,
    index,
} : List<Data> & {index: number}): Data | undefined;

export function ExtractParameter<Data>({
    value,
    index,
    array,
} : List<Data> & ValueInterface<Data[]> & {index: number}): Data | undefined {

    return ExtractParameters(value || array, index);
}


namespace Extract {
    export const Parameters = ExtractParameters;
    export const Parameter = ExtractParameter;
}
export default Extract;
