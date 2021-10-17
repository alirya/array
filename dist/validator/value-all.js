import ValidateValue from "./validatable/list/value";
import ValueCallback from "./value-callback";
import Map from "../message/message/list/map";
export default function ValueAll(validators, validation, message = Map) {
    return ValueCallback(validators, ValidateValue, validation, message);
}
//# sourceMappingURL=value-all.js.map