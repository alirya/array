import Message from '@alirya/message/message.js';

export default interface Messages<
    MessagesT extends Message[] = Message[]
> {

    messages : MessagesT;
}
