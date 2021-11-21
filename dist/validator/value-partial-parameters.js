import ValidateValuePartial from "./validatable/list/value-partial-parameters";
import ValueCallback from "./value-callback-parameters";
import Map from "../message/message/list/map";
export default function ValuePartialParameters(validators, validation, message = Map, stop = false) {
    return ValueCallback(validators, (value, validators) => ValidateValuePartial(value, validators, stop), validation, message);
}
//# sourceMappingURL=value-partial-parameters.js.map