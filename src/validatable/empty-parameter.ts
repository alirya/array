import Value from "@alirya/value/value";
import Message from "@alirya/message/message";
import Validatable from "@alirya/validator/validatable/validatable";
import EmptyParameters from "./empty-parameters";
import MessageCallback from "@alirya/validator/message/function/validatable-parameter";

export default function EmptyParameter<MessageType, Values extends unknown[]>(
    {
        value,
        message,
    } : Value<Values> & Message<MessageCallback<Values, MessageType>>
) : Readonly<Validatable<Values, MessageType>> {

    return EmptyParameters(value, (value, valid) => message({value, valid}));
}

