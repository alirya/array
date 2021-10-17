import ListCallback from "./list-callback";
import ValidateMapPartial from "./validatable/list/list-partial";
import Map from "../message/message/list/map";
import Boolean from "@dikac/t-boolean/boolean";
export default function ListPartial(validator, validation, message = Map, stop = false) {
    if (Boolean(message)) {
        return ListPartial(validator, validation, Map, message);
    }
    return ListCallback(validator, (value, validators) => ValidateMapPartial(value, validators, stop), validation, message);
}
//# sourceMappingURL=list-partial.js.map