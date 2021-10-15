import ListCallback from "./list-callback";
/**
 * function factory for {@link ListCallback}
 *
 * type return has better handling by typescript
 */
export default function ListCallbackFunction(validator, map, validation, message) {
    return ListCallback(validator, map, validation, message);
}
//# sourceMappingURL=list-callback-function.js.map