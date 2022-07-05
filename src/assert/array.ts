import Guard from '../boolean/array.js';
import {CallbackParameters} from '@alirya/function/assert/callback.js';
import ArrayError from './throwable/array.js';

export default function Array(
    value : unknown,
    error : (value:unknown)=>Error = ArrayError.Parameters
) : asserts value is globalThis.Array<any> {

    CallbackParameters(value, Guard, error);
}
