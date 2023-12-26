import DifferenceLeft from './difference.js';
import {EqualParameter, EqualParameters} from '@axiona/boolean/equal.js';
import Validation from '@axiona/boolean/validation/validation.js';
import Tuple from './array/tuple.js';
import Value from '@axiona/value/value.js';
import Compare from '@axiona/boolean/compare/compare.js';

/**
 * return values which does not exist in both list
 *
 * @param list1
 * @param list2
 * @param validation
 *
 *
 * @example
 * ([1,2,3], [1,2,4]) => [3, 4]
 */
export function DifferenceBothParameters<Value>(
    list1: ReadonlyArray<Value>,
    list2 : ReadonlyArray<Value>,
    validation : (value1 : Value, value2 : Value) => boolean = EqualParameters
) : Value[] {

    const left = DifferenceLeft.Parameters(list1, list2, validation);
    const right = DifferenceLeft.Parameters(list2, list1, validation);

    return [... new Set<Value>([...left, ...right])];
}



/**
 * option version of {@see DifferenceBothParameters}
 * @param list
 * @param validation
 */
export function DifferenceBothParameter<Type>(
    {
        array,
        validation = EqualParameter
    } : Partial<Validation<[Value<Type> & Compare<Type>]>> & Tuple<[ReadonlyArray<Type>, ReadonlyArray<Type>]>
) : Type[] {

    return DifferenceBothParameters(...array, (value, compare) => validation({value, compare}));
}


namespace DifferenceBoth {
    export const Parameters = DifferenceBothParameters;
    export const Parameter = DifferenceBothParameter;
}
export default DifferenceBoth;
