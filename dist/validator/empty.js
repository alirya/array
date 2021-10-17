import EmptyValidatable from "../validatable/empty";
import EmptyMessage from "../validatable/string/empty";
export default function Empty(message = EmptyMessage) {
    return function (value) {
        return new EmptyValidatable(value, message);
    };
}
//# sourceMappingURL=empty.js.map