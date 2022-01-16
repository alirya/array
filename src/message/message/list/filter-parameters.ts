import Message from "@alirya/message/message";
import ListInfer from "./infer";
import EnsureMessage from "@alirya/message/ensure/message-parameters";
import ValueMessage from "@alirya/message/message/value";
import {List} from "ts-toolbelt";
import MapUnion from "../../../unions";

export default function FilterParameters<
    MessagesType extends Message[]
>(
    list : MessagesType,
    filter : (messages:List.UnionOf<MessagesType>)=>boolean,
) : MapUnion<ListInfer<MessagesType>> {

    return <ListInfer<MessagesType>> list.map((v)=>EnsureMessage(v)).
        filter((v)=>filter(v)).
        map(ValueMessage);

}
