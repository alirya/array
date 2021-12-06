import Simple from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/validatable";
export default function ArrayParameters<Argument, MessageType>(value: Argument, message: Dynamic.Parameters<Argument, MessageType>): Readonly<Simple<Argument, unknown[], Instance<Argument, MessageType>>>;
