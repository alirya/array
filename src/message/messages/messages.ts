import Message from '@alirya/message/message';

export default interface Messages<
    MessagesT extends Message[] = Message[]
> {

    messages : MessagesT;
}
