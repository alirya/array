import ValidateValue from "./validatable/list/value-parameters";
import ValueCallback from "./value-callback-parameters";
import Map from "../message/message/list/map";
export default function ValueAllParameters(validators, validation, message = Map) {
    return ValueCallback(validators, ValidateValue, validation, message);
}
//# sourceMappingURL=value-all-parameters.js.map