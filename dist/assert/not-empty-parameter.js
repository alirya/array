import Guard from "../boolean/not-empty";
import Callback from "@dikac/t-function/assert/callback-parameters";
import EmptyError from "./throwable/not-empty";
export default function NotEmptyParameter(value, error = EmptyError) {
    Callback(value, Guard, error);
}
//# sourceMappingURL=not-empty-parameter.js.map