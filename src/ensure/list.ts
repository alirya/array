import {ListParameters as AssertListParameters} from '../assert/list.js';
import Guard from '@axiona/boolean/validation/guard.js';

/**
 * Check if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template Value}
 *
 * @param error
 */

export function ListParameters<
    Value extends Argument,
    Argument extends unknown,
>(
    list : ReadonlyArray<Argument>,
    validation : (value:Argument)=>value is Value,
    error : (value:unknown)=>Error
) : ReadonlyArray<Value>;

export function ListParameters<
    Value extends Argument,
    Argument extends unknown,
>(
    list : Argument[],
    validation : (value:Argument)=>value is Value,
    error : (value:unknown)=>Error
) : Value[];

export function ListParameters<
    Value extends Argument,
    Argument extends unknown,
>(
    list : Argument[],
    validation : (value:Argument)=>value is Value,
    error : (value:unknown)=>Error
) : Value[] {

    AssertListParameters(list, validation, error);

    return list;
}


/**
 * Check if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template Value}
 *
 * @param error
 */

export type ListArgument<
    Value extends Argument,
    Argument extends unknown,
> = Guard<Argument, Value> &
    {error : (value:unknown)=>Error};

export function ListParameter<
    Value extends Argument,
    Argument extends unknown,
>(
    list : ReadonlyArray<Argument>,
    {validation, error} : ListArgument<Value, Argument>
) : ReadonlyArray<Value>;

export function ListParameter<
    Value extends Argument,
    Argument extends unknown,
>(
    list : Argument[],
    {validation, error} : ListArgument<Value, Argument>
) : Value[] ;

export function ListParameter<
    Value extends Argument,
    Argument extends unknown,
>(
    list : Argument[]|ReadonlyArray<Argument>,
    {validation, error} : ListArgument<Value, Argument>
) : Value[]|ReadonlyArray<Argument> {

    return ListParameters(list, validation, error);
}


namespace List {
    export const Parameters = ListParameters;
    export const Parameter = ListParameter;
    export type Argument<
        Value extends Argument,
        Argument extends unknown,
    > = ListArgument<Value, Argument>;
}
export default List;
