import Guard from '../boolean/empty.js';
import {CallbackParameters} from '@alirya/function/assert/callback.js';
import EmptyError from './throwable/empty.js';

export default function Empty(
    value : unknown[],
    error : (value:unknown[])=>Error = EmptyError
) : asserts value is unknown[] {

    CallbackParameters(value, Guard, error);
}
