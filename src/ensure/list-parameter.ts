import Guard from "@alirya/boolean/validation/guard";
import ListParameters from "./lisparameters";

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
    {validation, error} : ListArgument<Value, Argument>
) : ReadonlyArray<Value>

export default function ListParameter<
    Value extends Argument,
    Argument extends unknown,
>(
    list : Argument[],
    {validation, error} : ListArgument<Value, Argument>
) : Value[] ;

export default function ListParameter<
    Value extends Argument,
    Argument extends unknown,
>(
    list : Argument[]|ReadonlyArray<Argument>,
    {validation, error} : ListArgument<Value, Argument>
) : Value[]|ReadonlyArray<Argument> {

    return ListParameters(list, validation, error);
}
