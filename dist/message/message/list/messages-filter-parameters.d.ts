import Message from "@dikac/t-message/message";
import ListInfer from "./infer";
import { List } from "ts-toolbelt";
import MapUnion from "../../../map-union";
import Messages from "../../../message/messages/messages";
export default function MessagesFilterParameters<MessagesType extends Message[]>(list: Messages<MessagesType>, filter?: (messages: List.UnionOf<MessagesType>) => boolean): MapUnion<ListInfer<MessagesType>>;
