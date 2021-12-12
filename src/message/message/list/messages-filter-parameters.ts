import Message from "@dikac/t-message/message";
import ListInfer from "./infer";
import {List} from "ts-toolbelt";
import MapUnion from "../../../unions";
import Messages from "../../../message/messages/messages";
import FilterParameters from "./filter-parameters";

export default function MessagesFilterParameters<
    MessagesType extends Message[]
>(
    list : Messages<MessagesType>,
    filter : (messages:List.UnionOf<MessagesType>)=>boolean = ()=>true
) : MapUnion<ListInfer<MessagesType>> {

    return FilterParameters(list.messages, filter);
}
