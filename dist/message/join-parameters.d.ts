import Message from "@dikac/t-message/message";
import Messages from "./messages/messages";
import Separator from "@dikac/t-string/separator/separator";
import ToString from "@dikac/t-string/to-string";
export default class JoinParameters<MessageType extends Message<string>[]> implements Messages<MessageType>, Message<string>, Separator, ToString {
    messages: MessageType;
    separator: string;
    constructor(messages: MessageType, separator: string);
    get message(): string;
    toString(): string;
}
