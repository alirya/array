import ListCallback from "./list-callback";
import ValidateMap from "./validatable/list/list";
import Map from "../message/message/list/map";
export default function ListAll(validator, validation, message = Map) {
    return ListCallback(validator, ValidateMap, validation, message);
}
//# sourceMappingURL=list-all.js.map