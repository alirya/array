import Message from '@alirya/message/message';
import Messages from './messages/messages';
import Join from './join';

export default function And<MessageType extends Message<string>[]>(
    messages : MessageType,
) : Messages<MessageType> & Message <string>{

    return new Join.Parameters(messages, ' and ');
}
