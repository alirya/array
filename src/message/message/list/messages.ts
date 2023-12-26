import Message from '@axiona/message/message.js';
import ListInfer from './infer.js';
import MapUnion from '../../../unions.js';
import Messages from '../../../message/messages/messages.js';
import Map from './map.js';

export default function Messages<
    MessagesType extends Message[]
>(
    list : Messages<MessagesType>,
) : MapUnion<ListInfer<MessagesType>> {

    return Map(list.messages);
}
