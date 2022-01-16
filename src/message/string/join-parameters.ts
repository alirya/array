import Message from '@alirya/message/message';
import JoinObjectParameters from '../join-parameters';

export default function JoinParameters<MessageT extends Message<string>[]>(
    messages : MessageT,
    separator : string
) : string {

    return new JoinObjectParameters(messages, separator).message;
}
