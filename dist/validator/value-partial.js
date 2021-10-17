import ValidateValuePartial from "./validatable/list/value-partial";
import ValueCallback from "./value-callback";
import Map from "../message/message/list/map";
import Boolean from "@dikac/t-boolean/boolean";
export default function ValuePartial(validators, validation, message = Map, stop = false) {
    if (Boolean(message)) {
        return ValuePartial(validators, validation, Map, message);
    }
    return ValueCallback(validators, (value, validators) => ValidateValuePartial(value, validators, stop), validation, message);
}
//# sourceMappingURL=value-partial.js.map