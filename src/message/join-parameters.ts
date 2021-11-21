import Message from "@dikac/t-message/message";
import Messages from "./messages/messages";
import Reset from "../reset";
import Separator from "@dikac/t-string/separator/separator";
import ToString from "@dikac/t-string/to-string";

export default class JoinParameters<MessageType extends Message<string>[]> implements Messages<MessageType>, Message<string>, Separator, ToString {

    constructor(
        public messages : MessageType,
        public separator : string
    ) {
    }

    get message() : string {

        let messages = Reset(this.messages);
        return messages.map(message=>message.message).join(this.separator);
    }

    toString(): string {

        return this.message;
    }
}
