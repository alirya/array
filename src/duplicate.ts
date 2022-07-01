import Callable from '@alirya/function/callable';
import Readonly from './array/readonly';
import Validation from '@alirya/boolean/validation/validation';
import Value from '@alirya/value/value';
import Compare from '@alirya/boolean/compare/compare';
import {EqualParameter, EqualParameters} from '@alirya/boolean/equal';

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

    let duplicates : Value[] = [];

    for(let [index1, value1] of list.entries()) {

        for(let [index2, value2] of list.entries()) {

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
