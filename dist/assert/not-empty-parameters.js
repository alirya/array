import Guard from "../boolean/not-empty";
import EmptyError from "./throwable/not-empty";
import CallbackParameters from "@dikac/t-function/assert/callback-parameters";
export default function NotEmptyParameters(value, error = EmptyError) {
    CallbackParameters(value, Guard, error);
}
//# sourceMappingURL=not-empty-parameters.js.map