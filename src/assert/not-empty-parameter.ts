import Guard from '../boolean/not-empty';
import Callback from '@alirya/function/assert/callback-parameters';
import EmptyError from './throwable/not-empty';

export default function NotEmptyParameter(
    value : unknown[],
    error : (value:unknown[])=>Error = EmptyError
) : asserts value is Array<unknown> {

    Callback(value, Guard, error);
}
