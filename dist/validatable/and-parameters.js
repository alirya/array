import IterableAnd from "@dikac/t-iterable/validatable/boolean/and-parameters";
import Callback from "./callback-parameters";
export default function AndParameters(validatables, defaults = true) {
    return new Callback(validatables, (v) => IterableAnd(v, defaults));
}
//# sourceMappingURL=and-parameters.js.map