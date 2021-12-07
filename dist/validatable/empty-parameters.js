import EmptyArgument from "../boolean/empty";
import Callback from "@dikac/t-validator/validatable/callback-class-parameters";
export default function EmptyParameters(value, message) {
    return new Callback(value, EmptyArgument, message);
}
//# sourceMappingURL=empty-parameters.js.map