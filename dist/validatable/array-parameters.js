import Callback from "@dikac/t-validator/validatable/callback-class-parameters";
import ObjectGuard from "../boolean/array";
export default function ArrayParameters(value, message) {
    return new Callback(value, ObjectGuard, message);
}
//# sourceMappingURL=array-parameters.js.map