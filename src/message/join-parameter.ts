import Message from '@alirya/message/message';
import Messages from './messages/messages';
import JoinParameters from './join-parameters';
import Separator from '@alirya/string/separator/separator';

export type JoinParameterArgument<MessageType extends Message<string>[]> = Messages<MessageType> & Separator;

export default class JoinParameter<MessageType extends Message<string>[]> extends JoinParameters<MessageType> {

    constructor({
            messages,
            separator,
        } : JoinParameterArgument<MessageType>

    ) {
        super(messages, separator);
    }


}
