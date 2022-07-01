import Message from '@alirya/message/message';
import Join from './join';
import Messages from './messages/messages';

export default function Or<MessageType extends Message<string>[]>(
    messages : MessageType,
) : Messages<MessageType> & Message <string>{

    return new Join.Parameters(messages, ' or ');
}
