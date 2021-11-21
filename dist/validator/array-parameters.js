import ArrayValidatable from "../validatable/array-parameters";
import ArrayMessage from "../validatable/string/array-parameters";
export default function ArrayParameters(message = ArrayMessage) {
    return function (value) {
        return ArrayValidatable(value, message);
    };
}
//# sourceMappingURL=array-parameters.js.map