import EmptyValidatable from "../validatable/empty-parameters";
import EmptyMessage from "../validatable/string/empty-parameters";
export default function EmptyParameters(message = EmptyMessage) {
    return function (value) {
        return EmptyValidatable(value, message);
    };
}
//# sourceMappingURL=empty-parameters.js.map