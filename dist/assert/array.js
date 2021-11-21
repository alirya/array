import Guard from "../boolean/array";
import Callback from "@dikac/t-function/assert/callback-parameters";
import ArrayError from "./throwable/array-parameters";
export default function Array(value, error = ArrayError) {
    Callback(value, Guard, error);
}
//# sourceMappingURL=array.js.map