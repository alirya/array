import AssertArray from '../assert/array';
import ArrayError from '../assert/throwable/array-parameters';

export default function ArrayParameters(
    value : unknown,
    error : (value:unknown)=>Error = ArrayError
) : unknown[] {

    AssertArray(value, error);

    return value;
}
