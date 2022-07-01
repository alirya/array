import Message from '@alirya/message/message';
import ListInfer from './infer';
import {List} from 'ts-toolbelt';
import MapUnion from '../../../unions';
import Messages from '../../../message/messages/messages';
import Filter from './filter';
import Value from '@alirya/value/value';

export function MessagesFilterParameters<
    MessagesType extends Message[]
>(
    list : Messages<MessagesType>,
    filter : (messages:List.UnionOf<MessagesType>)=>boolean = ()=>true
) : MessagesFilterReturn<MessagesType> {

    return Filter.Parameters(list.messages, filter);
}


export type MessageFilterArgument<MessagesType extends Message[]> =
    Value<Messages<MessagesType>> & {
    filter: (messages: List.UnionOf<MessagesType>) => boolean;
};

export function MessagesFilterParameter<
    MessagesType extends Message[]
>(
    {
        value,
        filter,
    } : MessageFilterArgument<MessagesType>
) : MessagesFilterReturn<MessagesType> {

    return MessagesFilterParameters(value, filter);
}

export type MessagesFilterReturn<MessagesType extends Message[]> = MapUnion<ListInfer<MessagesType>>;


namespace MessagesFilter {
    export const Parameters = MessagesFilterParameters;
    export const Parameter = MessagesFilterParameter;
    export type Argument<MessagesType extends Message[]> = MessageFilterArgument<MessagesType>;
    export type Return<MessagesType extends Message[]> = MessagesFilterReturn<MessagesType>;
}
export default MessagesFilter;
