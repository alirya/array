import {CallbackParameters} from '@alirya/function/assert/callback.js';
import Guard from '../boolean/list.js';
import ReadonlyList from '../array/readonly.js';
import GuardValidation from '@alirya/boolean/validation/guard.js';
import StrictOmit from '@alirya/object/strict-omit.js';

/**
 * assert if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template list}
 *
 * @param error
 */

export function ListParameters<
    Value extends ArgumentType,
    ArgumentType extends unknown,
>(
    list : ReadonlyArray<ArgumentType>,
    validation : (value:ArgumentType)=>value is Value,
    error : (value:unknown)=>Error,
) : asserts list is Value[] {

    CallbackParameters(list, (value : ReadonlyArray<ArgumentType>)=>Guard(value, validation), error);
}


/**
 * assert if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template list}
 *
 * @param error
 */

export type ListArgument<
    Value extends ArgumentType,
    ArgumentType extends unknown,
> = GuardValidation<ArgumentType, Value> & ReadonlyList<ArgumentType> & {
    error : (value:unknown)=>Error
};

export function ListParameter<
    Value extends ArgumentType,
    ArgumentType extends unknown,
>(
    args : ListArgument<Value, ArgumentType>
) : asserts args is StrictOmit<ListArgument<Value, ArgumentType>, 'array'> & ReadonlyList<Value> {

    return ListParameters(args.array, args.validation, args.error);
}



namespace List {
    export const Parameters = ListParameters;
    export const Parameter = ListParameter;
    export type Argument<
        Value extends ArgumentType,
        ArgumentType extends unknown,
    > = ListArgument<
        Value,
        ArgumentType
    >;
}
export default List;
