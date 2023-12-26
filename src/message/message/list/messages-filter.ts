import Message from '@axiona/message/message.js';
import ListInfer from './infer.js';
import {List} from 'ts-toolbelt';
import MapUnion from '../../../unions.js';
import Messages from '../../../message/messages/messages.js';
import Filter from './filter.js';
import Value from '@axiona/value/value.js';

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
