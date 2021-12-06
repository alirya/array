import IterableOr from "@dikac/t-iterable/validatable/boolean/or-parameters";
import Callback from "./callback-parameters";
export default function OrParameters(validatables, defaults = true) {
    return new Callback(validatables, (v) => IterableOr(v, defaults));
}
//# sourceMappingURL=or-parameters.js.map