import Message from "@dikac/t-message/message";
import Messages from "./messages/messages";
import JoinParameters from "./join-parameters";
import Separator from "@dikac/t-string/separator/separator";

export type JoinParameterArgument<MessageType extends Message<string>[]> = Messages<MessageType> & Separator;

export default class JoinParameter<MessageType extends Message<string>[]> extends JoinParameters<MessageType> {

    constructor({
            messages,
            separator,
        } : JoinParameterArgument<MessageType>

    ) {
        super(messages, separator);
    }


}
