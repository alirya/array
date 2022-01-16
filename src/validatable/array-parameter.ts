import Value from "@alirya/value/value";
import Construct from "@alirya/validator/validatable/simple";
import Instance from "@alirya/validator/validatable/validatable";
import Message from "@alirya/message/message";
import ArrayParameters from "./array-parameters";
import Dynamic from "@alirya/validator/message/function/validatable-parameter";


export type ArrayArgument<Argument, MessageType> =
    Value<Argument> &
    Message<Dynamic<Argument, MessageType>>

export default function ArrayParameter<Argument, MessageType>(
    {
        value,
        message,
    } : ArrayArgument<Argument, MessageType>
) : Readonly<Construct<Argument, any[], Instance<Argument, MessageType>>> {

    return ArrayParameters(value, (value, valid) => message({value, valid}));
}
