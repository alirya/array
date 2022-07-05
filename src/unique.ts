import {EqualParameters} from '@alirya/boolean/equal.js';
import Callable from '@alirya/function/callable.js';
import Value from '@alirya/value/value.js';
import Validation from '@alirya/boolean/validation/validation.js';

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

    const results : Value[] = [];

    PARENT: for(const index1 in value) {

        for(const result of results) {

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
