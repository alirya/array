import GuardValidation from '@alirya/boolean/validation/guard';
import ListParameters from './lisparameters';

/**
 * assert if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template list}
 *
 * @param error
 */


export default function ListParameter<
    Value extends ArgumentType,
    ArgumentType extends unknown,
>(
    list : ReadonlyArray<ArgumentType>,
    {validation, error} : GuardValidation<ArgumentType, Value> & {error : (value:unknown)=>Error}
) : asserts list is Value[] {

    return ListParameters(list, validation, error);
}

