import EnsureMessage from "@dikac/t-message/ensure/message";
import ValueMessage from "@dikac/t-message/message/value";
export default function FilterParameters(list, filter) {
    return list.map((v) => EnsureMessage(v)).
        filter((v) => filter(v)).
        map(ValueMessage);
}
//# sourceMappingURL=filter-parameters.js.map