import Message from '@axiona/message/message.js';
import OrObject from '../or.js';

export default function Or<MessageT extends Message<string>[]>(
    messages : MessageT,
) : string {

    return OrObject(messages).message;
}
