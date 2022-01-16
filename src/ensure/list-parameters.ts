import AssertList from "../assert/lisparameters";

/**
 * Check if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template Value}
 *
 * @param error
 */

export default function ListParameters<
    Value extends Argument,
    Argument extends unknown,
>(
    list : ReadonlyArray<Argument>,
    validation : (value:Argument)=>value is Value,
    error : (value:unknown)=>Error
) : ReadonlyArray<Value>

export default function ListParameters<
    Value extends Argument,
    Argument extends unknown,
>(
    list : Argument[],
    validation : (value:Argument)=>value is Value,
    error : (value:unknown)=>Error
) : Value[];

export default function ListParameters<
    Value extends Argument,
    Argument extends unknown,
>(
    list : Argument[],
    validation : (value:Argument)=>value is Value,
    error : (value:unknown)=>Error
) : Value[] {

    AssertList(list, validation, error);

    return list;
}
