// noinspection ES6UnusedImports
import NotEmptyMessage from "../validatable/string/not-empty-parameter";
import NotEmptyParameters from "./not-empty-parameters";
export default function NotEmptyParameter(message = NotEmptyMessage) {
    return NotEmptyParameters((value, valid) => message({ value, valid }));
}
//# sourceMappingURL=not-empty-parameter.js.map