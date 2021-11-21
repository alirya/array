import Extract from "./value/value/extract-parameters";
import Index from "./number";
import Equal from "@dikac/t-boolean/equal";
export default function RemovesValueParameters(list, value, validation = Equal, start = 0, end = Infinity, limit = Infinity) {
    let removed = [];
    while (limit > 0) {
        let index = Index(list, value, validation, start, end);
        if (index !== null) {
            let value = Extract(list, index);
            if (value === undefined) {
                // TODO ADD ERROR
                throw new Error('TODO');
            }
            removed.push(value);
            limit--;
        }
        else {
            break;
        }
    }
    return removed;
}
//# sourceMappingURL=removes-value-parameters.js.map