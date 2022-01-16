import Message from '@alirya/message/message';
import ListInfer from './infer';
import MapUnion from '../../../unions';
import Messages from '../../../message/messages/messages';
import Map from './map';

export default function Messages<
    MessagesType extends Message[]
>(
    list : Messages<MessagesType>,
) : MapUnion<ListInfer<MessagesType>> {

    return Map(list.messages);
}
