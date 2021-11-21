import Guard from "../boolean/array";
import Callback from "@dikac/t-function/assert/callback-parameters";
import ArrayError from "./throwable/array-parameters";

export default function Array(
    value : unknown,
    error : (value:unknown)=>Error = ArrayError
) : asserts value is globalThis.Array<any> {

    Callback(value, Guard, error);
}
