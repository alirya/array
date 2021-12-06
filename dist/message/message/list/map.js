import EnsureMessage from "@dikac/t-message/ensure/message-parameters";
import ValueMessage from "@dikac/t-message/message/value";
export default function Map(list) {
    return list.map((v) => EnsureMessage(v)).map(ValueMessage);
}
//# sourceMappingURL=map.js.map