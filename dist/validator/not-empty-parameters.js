import NotEmptyValidatable from "../validatable/not-empty-parameters";
import NotEmptyMessage from "../validatable/string/not-empty-parameters";
export default function NotEmptyParameters(message = NotEmptyMessage) {
    return function (value) {
        return new NotEmptyValidatable(value, message);
    };
}
//# sourceMappingURL=not-empty-parameters.js.map