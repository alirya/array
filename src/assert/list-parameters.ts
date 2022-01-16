import Callback from '@alirya/function/assert/callback-parameters';
import Guard from '../boolean/list';

/**
 * assert if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template list}
 *
 * @param error
 */

export default function ListParameters<
    Value extends ArgumentType,
    ArgumentType extends unknown,
>(
    list : ReadonlyArray<ArgumentType>,
    validation : (value:ArgumentType)=>value is Value,
    error : (value:unknown)=>Error,
) : asserts list is Value[] {

    Callback(list, (value : ReadonlyArray<ArgumentType>)=>Guard(value, validation), error);
}
