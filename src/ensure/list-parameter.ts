import Guard from "@dikac/t-boolean/validation/guard";
import ListParameters from "./list-parameters";

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
    {error : (value:unknown)=>Error}

export default function ListParameter<
    Value extends Argument,
    Argument extends unknown,
>(
    list : ReadonlyArray<Argument>,
    //validation : (value:Argument)=>value is Value,
    //error : (value:unknown)=>Error,
    {validation, error} : ListArgument<Value, Argument>
) : ReadonlyArray<Value>

export default function ListParameter<
    Value extends Argument,
    Argument extends unknown,
>(
    list : Argument[],
    //validation : (value:Argument)=>value is Value,
    //error : (value:unknown)=>Error,
    {validation, error} : ListArgument<Value, Argument>
) : Value[] ;

export default function ListParameter<
    Value extends Argument,
    Argument extends unknown,
>(
    list : Argument[]|ReadonlyArray<Argument>,
    //validation : (value:Argument)=>value is Value,
    //error : (value:unknown)=>Error,
    {validation, error} : ListArgument<Value, Argument>
) : Value[]|ReadonlyArray<Argument> {

    return ListParameters(list, validation, error);
}
