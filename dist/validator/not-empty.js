import NotEmptyValidatable from "../validatable/not-empty";
import NotEmptyMessage from "../validatable/string/not-empty";
export default function NotEmpty(message = NotEmptyMessage) {
    return function (value) {
        return new NotEmptyValidatable(value, message);
    };
}
//# sourceMappingURL=not-empty.js.map