import StringIncludes from "../assert/string/includes-parameters";
import Equal from "@dikac/t-boolean/equal";
// TODO CHANGE PARAMETER ORDER default last?
export default function IncludesParameter(value, trues, falses, defaults = (value, trues, falses) => { throw new Error(StringIncludes(false)); }, compare = Equal) {
    for (const val of trues) {
        if (compare(value, val)) {
            return true;
        }
    }
    for (const val of falses) {
        if (compare(value, val)) {
            return false;
        }
    }
    return defaults(value, trues, falses);
}
//# sourceMappingURL=includes-parameter.js.map