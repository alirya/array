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


type UniqueArgument<Type> = Value<ReadonlyArray<Type>> & Partial<Validation<[Type, Type]>>;

/**
 * object argument version of {@link UniqueParameters}
 * @param value
 * @param validation
 */
export function UniqueParameter<Type>(
    {value, validation} : UniqueArgument<Type>
) : Type[] {
    return UniqueParameters(value, validation);
}


function Unique<Type>(value : ReadonlyArray<Type>, validation ?: Callable<[Type, Type], boolean>) : Type[];
function Unique<Type>(argument:UniqueArgument<Type>) : Type[];
function Unique<Type>(argument:UniqueArgument<Type>|ReadonlyArray<Type>, validation ?: Callable<[Type, Type], boolean>) : Type[] {

    if(Array.isArray(argument)) {

        return UniqueParameters(argument, validation);

    } else {

        return UniqueParameter(argument as UniqueArgument<Type>);
    }


}


namespace Unique {
    export const Parameters = UniqueParameters;
    export const Parameter = UniqueParameter;
}

export default Unique;
export {Unique as ArrayUnique};
