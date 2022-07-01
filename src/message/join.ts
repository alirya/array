import Message from '@alirya/message/message';
import Messages from './messages/messages';
import Reset from '../reset';
import Separator from '@alirya/string/separator/separator';
import ToString from '@alirya/string/to-string';

export class JoinParameters<MessageType extends Message<string>[]> implements Messages<MessageType>, Message<string>, Separator, ToString {

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
