import Guard from "../boolean/empty";
import Callback from "@alirya/function/assert/callback-parameters";
import EmptyError from "./throwable/empty";

export default function Empty(
    value : unknown[],
    error : (value:unknown[])=>Error = EmptyError
) : asserts value is unknown[] {

    Callback(value, Guard, error);
}
