import Message from '@axiona/message/message.js';
import Messages from './messages/messages.js';
import Reset from '../reset.js';
import Separator from '@axiona/string/separator/separator.js';
import ToString from '@axiona/string/to-string.js';

export class JoinParameters<MessageType extends Message<string>[]> implements Messages<MessageType>, Message<string>, Separator, ToString {

    constructor(
        public messages : MessageType,
        public separator : string
    ) {
    }

    get message() : string {

        const messages = Reset(this.messages);
        return messages.map(message=>message.message).join(this.separator);
    }

    toString(): string {

        return this.message;
    }
}


export type JoinArgument<MessageType extends Message<string>[]> = Messages<MessageType> & Separator;

export class JoinParameter<MessageType extends Message<string>[]> extends JoinParameters<MessageType> {

    constructor({
            messages,
            separator,
        } : JoinArgument<MessageType>

    ) {
        super(messages, separator);
    }


}


namespace Join {
    export const Parameters = JoinParameters;
    export const Parameter = JoinParameter;
    export type Argument<MessageType extends Message<string>[]> = JoinArgument<MessageType>;
}
export default Join;
