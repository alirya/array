import ListCallback from "./list-callback-parameters";
import ValidateMapPartial from "./validatable/list/list-partial-parameters";
import Map from "../message/message/list/map";
export default function ListPartialParameters(validator, validation, message = Map, stop = false) {
    return ListCallback(validator, (value, validators) => ValidateMapPartial(value, validators, stop), validation, message);
}
//# sourceMappingURL=list-partial-parameters.js.map