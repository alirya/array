import Construct from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Dynamic from "@dikac/t-validator/message/function/dynamic";
export default function ArrayParameters<Argument, MessageType>(value: Argument, message: Dynamic.Parameters<Argument, MessageType>): Readonly<Construct<any, Argument, any[], Instance<unknown, MessageType>>>;
