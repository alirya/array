import Message from "@alirya/message/message";
import ListInfer from "./infer";
import EnsureMessage from "@alirya/message/ensure/message-parameters";
import ValueMessage from "@alirya/message/message/value";

export default function Map<
    Messages extends Message[]
>(
    list : Messages,
) : ListInfer<Messages> {

    return <ListInfer<Messages>> list.map((v)=>EnsureMessage(v)).map(ValueMessage);
}
