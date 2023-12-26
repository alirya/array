import Message from '@axiona/message/message.js';
import AndObject from '../and.js';

export default function And<MessageT extends Message<string>[]>(
    messages : MessageT,
) : string {

    return AndObject(messages).message;
}
