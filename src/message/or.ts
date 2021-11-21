import Message from "@dikac/t-message/message";
import Join from "./join-parameters";
import Messages from "./messages/messages";

export default function Or<MessageType extends Message<string>[]>(
    messages : MessageType,
) : Messages<MessageType> & Message <string>{

    return new Join(messages, ' or ')
}
