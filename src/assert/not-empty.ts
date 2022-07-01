import Guard from '../boolean/not-empty';
import EmptyError from './throwable/not-empty';
import {CallbackParameters} from '@alirya/function/assert/callback';
import Callback from '@alirya/function/assert/callback';

export function NotEmptyParameters(
    value : unknown[],
    error : (value:unknown[])=>Error = EmptyError
) : asserts value is Array<unknown> {

    CallbackParameters(value, Guard, error);
}


export function NotEmptyParameter(
    value : unknown[],
    error : (value:unknown[])=>Error = EmptyError
) : asserts value is Array<unknown> {

    Callback.Parameters(value, Guard, error);
}


namespace NotEmpty {
    export const Parameters = NotEmptyParameters;
    export const Parameter = NotEmptyParameter;
}
export default NotEmpty;
