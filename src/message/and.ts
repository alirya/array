import Message from '@axiona/message/message.js';
import Messages from './messages/messages.js';
import Join from './join.js';

export default function And<MessageType extends Message<string>[]>(
    messages : MessageType,
) : Messages<MessageType> & Message <string>{

    return new Join.Parameters(messages, ' and ');
}
