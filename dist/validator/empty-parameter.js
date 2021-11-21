import EmptyMessage from "../validatable/string/empty-parameter";
import EmptyParameters from "./empty-parameters";
export default function EmptyParameter(message = EmptyMessage) {
    return EmptyParameters((value, valid) => message({ value, valid }));
}
//# sourceMappingURL=empty-parameter.js.map