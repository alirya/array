import Message from "@dikac/t-message/message";
import ListInfer from "./infer";
import EnsureMessage from "@dikac/t-message/ensure/message";
import ValueMessage from "@dikac/t-message/message/value";
import {List} from "ts-toolbelt";
import MapUnion from "../../../map-union";
import Messages from "../../messages/messages";

export type MessageFilterArgument<MessagesType extends Message[]> =
    Messages<MessagesType> & {
    filter: (messages: List.UnionOf<MessagesType>) => boolean;
}

export default function FilterParameter<
    MessagesType extends Message[]
>(
    // list : MessagesType,
    // filter : (messages:List.UnionOf<MessagesType>)=>boolean,
    {
        messages,
        filter,
    } : MessageFilterArgument<MessagesType>
) : MapUnion<ListInfer<MessagesType>> {

    return <ListInfer<MessagesType>> messages.map((v)=>EnsureMessage(v)).
        filter((v)=>filter(v)).
        map(ValueMessage);

}
