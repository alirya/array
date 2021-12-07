import Value from "@dikac/t-value/value";
import Construct from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Message from "@dikac/t-message/message";
import Dynamic from "@dikac/t-validator/message/function/validatable-parameter";
export declare type ArrayArgument<Argument, MessageType> = Value<Argument> & Message<Dynamic<Argument, MessageType>>;
export default function ArrayParameter<Argument, MessageType>({ value, message, }: ArrayArgument<Argument, MessageType>): Readonly<Construct<Argument, any[], Instance<Argument, MessageType>>>;
