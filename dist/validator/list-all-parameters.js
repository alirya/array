import ListCallback from "./list-callback-parameters";
import ValidateMap from "./validatable/list/list-parameters";
import Map from "../message/message/list/map";
export default function ListAllParameters(validator, validation, message = Map) {
    return ListCallback(validator, ValidateMap, validation, message);
}
//# sourceMappingURL=list-all-parameters.js.map