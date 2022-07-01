import Guard from '../boolean/array';
import {CallbackParameters} from '@alirya/function/assert/callback';
import ArrayError from './throwable/array';

export default function Array(
    value : unknown,
    error : (value:unknown)=>Error = ArrayError.Parameters
) : asserts value is globalThis.Array<any> {

    CallbackParameters(value, Guard, error);
}
