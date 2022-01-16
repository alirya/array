import Message from "@alirya/message/message";
import Messages from "./messages/messages";
import JoinParameters from "./join-parameters";

export default function And<MessageType extends Message<string>[]>(
    messages : MessageType,
) : Messages<MessageType> & Message <string>{

    return new JoinParameters(messages, ' and ')
}
