import Message from "@dikac/t-message/message";
import ListInfer from "./infer";
import { List } from "ts-toolbelt";
import MapUnion from "../../../map-union";
import Messages from "../../messages/messages";
export declare type MessageFilterArgument<MessagesType extends Message[]> = Messages<MessagesType> & {
    filter: (messages: List.UnionOf<MessagesType>) => boolean;
};
export default function FilterParameter<MessagesType extends Message[]>({ messages, filter, }: MessageFilterArgument<MessagesType>): MapUnion<ListInfer<MessagesType>>;
