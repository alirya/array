import Message from '@alirya/message/message';
import Messages from './messages/messages';
import Reset from '../reset';
import Separator from '@alirya/string/separator/separator';
import ToString from '@alirya/string/to-string';

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
