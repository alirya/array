import Guard from '../boolean/not-empty.js';
import EmptyError from './throwable/not-empty.js';
import {CallbackParameters} from '@axiona/function/assert/callback.js';
import Callback from '@axiona/function/assert/callback.js';

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
