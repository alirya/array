import Message from '@alirya/message/message';
import ListInfer from './infer';
import {MessageParameters} from '@alirya/message/ensure/message';
import ValueMessage from '@alirya/message/message/value';

export default function Map<
    Messages extends Message[]
>(
    list : Messages,
) : ListInfer<Messages> {

    return <ListInfer<Messages>> list.map((v)=>MessageParameters(v)).map(ValueMessage);
}
