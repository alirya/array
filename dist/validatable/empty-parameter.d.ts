import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validator/validatable/validatable";
import MessageCallback from "@dikac/t-validator/message/function/validatable-parameter";
export default function EmptyParameter<MessageType, Values extends unknown[]>({ value, message, }: Value<Values> & Message<MessageCallback<Values, MessageType>>): Readonly<Validatable<Values, MessageType>>;
