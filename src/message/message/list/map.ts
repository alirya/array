import Message from "@dikac/t-message/message";
import ListInfer from "./infer";
import EnsureMessage from "@dikac/t-message/ensure/message-parameters";
import ValueMessage from "@dikac/t-message/message/value";

export default function Map<
    Messages extends Message[]
>(
    list : Messages,
) : ListInfer<Messages> {

    return <ListInfer<Messages>> list.map((v)=>EnsureMessage(v)).map(ValueMessage);
}
