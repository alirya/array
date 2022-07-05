import Message from '@alirya/message/message.js';
import ListInfer from './infer.js';
import {MessageParameters} from '@alirya/message/ensure/message.js';
import ValueMessage from '@alirya/message/message/value.js';

export default function Map<
    Messages extends Message[]
>(
    list : Messages,
) : ListInfer<Messages> {

    return <ListInfer<Messages>> list.map((v)=>MessageParameters(v)).map(ValueMessage);
}
