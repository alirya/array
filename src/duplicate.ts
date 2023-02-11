import Callable from '@alirya/function/callable.js';
import Readonly from './array/readonly.js';
import Validation from '@alirya/boolean/validation/validation.js';
import Value from '@alirya/value/value.js';
import Compare from '@alirya/boolean/compare/compare.js';
import {EqualParameter, EqualParameters} from '@alirya/boolean/equal.js';

/**
 * pick a duplicate value from {@param list}
 *
 * @param list
 *
 * @param validation
 * to compare value equality
 */
export function DuplicateParameters<Value>(
    list : ReadonlyArray<Value>,
    validation : Callable<[Value, Value], boolean> = EqualParameters
) : Value[] {

    const duplicates : Value[] = [];

    for(const [index1, value1] of list.entries()) {

        for(const [index2, value2] of list.entries()) {

            if(index1 === index2) {

                continue;
            }

            if(validation(value1, value2)) {

                duplicates.push(value1);
                break;
            }
        }
    }

    return duplicates;
}



/**
 * option version of {@see DuplicateParameters}
 */

export function DuplicateParameter<Type>(
    {
        array,
        validation = EqualParameter
    } : Partial<Validation<[Value<Type> & Compare<Type>]>> & Readonly<Type>
) : Type[] {

    return DuplicateParameters(
        array,
        (value, compare) => validation({value, compare})
    );
}


namespace Duplicate {
    export const Parameters = DuplicateParameters;
    export const Parameter = DuplicateParameter;
}
export default Duplicate;
