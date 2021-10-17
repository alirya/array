import Callback from "@dikac/t-validator/validatable/callback";
import ObjectGuard from "../boolean/array";
export default function Array(value, message) {
    return Callback(value, ObjectGuard, message);
}
//# sourceMappingURL=array.js.map