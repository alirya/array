import Message from '@alirya/message/message';
import ListInfer from './infer';
import EnsureMessage from '@alirya/message/ensure/message-parameters';
import ValueMessage from '@alirya/message/message/value';
import {List} from 'ts-toolbelt';
import MapUnion from '../../../unions';
import Messages from '../../messages/messages';

export type MessageFilterArgument<MessagesType extends Message[]> =
    Messages<MessagesType> & {
    filter: (messages: List.UnionOf<MessagesType>) => boolean;
};

export default function FilterParameter<
    MessagesType extends Message[]
>(
    {
        messages,
        filter,
    } : MessageFilterArgument<MessagesType>
) : MapUnion<ListInfer<MessagesType>> {

    return <ListInfer<MessagesType>> messages.map((v)=>EnsureMessage(v)).
        filter((v)=>filter(v)).
        map(ValueMessage);

}
