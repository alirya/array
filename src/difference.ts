import List from './array/list';
import Value from '@alirya/value/value';
import Validation from '@alirya/boolean/validation/validation';
import Compare from '@alirya/boolean/compare/compare';
import {EqualParameter, EqualParameters} from '@alirya/boolean/equal';


/**
 * return all data from {@param list} that does not exist in {@param value}
 *
 * @param list
 * @param value
 * @param validation
 */
export function DifferenceParameters<Type>(
    list: ReadonlyArray<Type>,
    value : ReadonlyArray<Type>,
    validation : (target : Type, comparison : Type) => boolean = EqualParameters
) : Type[] {
    let results : Type[] = [];

    TARGET : for(let target of list) {

        for(let comparison of value) {

            if(validation(target, comparison)) {

                continue TARGET;
            }
        }

        results.push(target);
    }

    return results;
}


/**
 * option version of {@see DifferenceParameters}
 */
export function DifferenceParameter<Type>(
    {
        array,
        compare,
        validation = EqualParameter,
    } : List<Type> & Partial<Validation<[Value<Type> & Compare<Type>]>> & Compare<ReadonlyArray<Type>>
) : Type[] {

    return DifferenceParameters(array, compare,     (value, compare) => validation({value, compare}));
}


namespace Difference {
    export const Parameters = DifferenceParameters;
    export const Parameter = DifferenceParameter;
}
export default Difference;
