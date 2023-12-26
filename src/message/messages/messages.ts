import Message from '@axiona/message/message.js';

export default interface Messages<
    MessagesT extends Message[] = Message[]
> {

    messages : MessagesT;
}
