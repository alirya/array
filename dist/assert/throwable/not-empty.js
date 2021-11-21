import NotEmptyType from "../../assert/string/not-empty-parameters";
export default function NotEmpty(string) {
    return new Error(NotEmptyType(string, false));
}
//# sourceMappingURL=not-empty.js.map