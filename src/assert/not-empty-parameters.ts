import Guard from "../boolean/not-empty";
import EmptyError from "./throwable/not-empty";
import CallbackParameters from "@dikac/t-function/assert/callback-parameters";

export default function NotEmptyParameters(
    value : unknown[],
    error : (value:unknown[])=>Error = EmptyError
) : asserts value is Array<unknown> {

    CallbackParameters(value, Guard, error);
}
