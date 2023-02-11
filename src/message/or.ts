import Message from '@alirya/message/message.js';
import Join from './join.js';
import Messages from './messages/messages.js';

export default function Or<MessageType extends Message<string>[]>(
    messages : MessageType,
) : Messages<MessageType> & Message <string>{

    return new Join.Parameters(messages, ' or ');
}
