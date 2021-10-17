import ArrayValidatable from "../validatable/array";
import ArrayMessage from "../validatable/string/array";
export default function Array_(message = ArrayMessage) {
    return function (value) {
        return ArrayValidatable(value, message);
    };
}
//# sourceMappingURL=array.js.map