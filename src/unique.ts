import {EqualParameters} from '@alirya/boolean/equal';
import Callable from '@alirya/function/callable';
import Value from '@alirya/value/value';
import Validation from '@alirya/boolean/validation/validation';

/**
 * pick a unique value from {@param value}
 *
 * @param value
 *
 * @param validation
 * to compare value equality
 */
export function UniqueParameters<Value>(
    value : ReadonlyArray<Value>,
    validation : Callable<[Value, Value], boolean> = EqualParameters
) : Value[] {

    let results : Value[] = [];

    PARENT: for(let index1 in value) {

        for(let result of results) {

            if(validation(value[index1], result)) {

                continue PARENT;
            }
        }

        results.push(value[index1]);
    }

    return results;
}



/**
 * object argument version of {@link UniqueParameters}
 * @param value
 * @param validation
 */
export function UniqueParameter<Type>(
    {value, validation} : Value<ReadonlyArray<Type>> & Partial<Validation<[Type, Type]>>
) {
    return UniqueParameters(value, validation);
}


namespace Unique {
    export const Parameters = UniqueParameters;
    export const Parameter = UniqueParameter;
}
export default Unique;
