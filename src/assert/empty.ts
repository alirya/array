import Guard from '../boolean/empty';
import {CallbackParameters} from '@alirya/function/assert/callback';
import EmptyError from './throwable/empty';

export default function Empty(
    value : unknown[],
    error : (value:unknown[])=>Error = EmptyError
) : asserts value is unknown[] {

    CallbackParameters(value, Guard, error);
}
