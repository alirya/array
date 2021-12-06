import EnsureMessage from "@dikac/t-message/ensure/message-parameters";
import ValueMessage from "@dikac/t-message/message/value";
export default function FilterParameter(
// list : MessagesType,
// filter : (messages:List.UnionOf<MessagesType>)=>boolean,
{ messages, filter, }) {
    return messages.map((v) => EnsureMessage(v)).
        filter((v) => filter(v)).
        map(ValueMessage);
}
//# sourceMappingURL=filter-parameter.js.map