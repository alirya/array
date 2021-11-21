import ArrayMessage from "../validatable/string/array-parameter";
import ArrayParameters from "./array-parameters";
export default function ArrayParameter(message = ArrayMessage) {
    return ArrayParameters((value, valid) => message({ valid, value }));
}
//# sourceMappingURL=array-parameter.js.map