import Callback from "@alirya/validator/validatable/callback-class-parameters";
import ObjectGuard from "../boolean/array";
import Simple from "@alirya/validator/validatable/simple";
import Instance from "@alirya/validator/validatable/validatable";
import MessageCallback from "@alirya/validator/message/function/validatable-parameters";

export default function ArrayParameters<Argument, MessageType>(
    value : Argument,
    message : MessageCallback<Argument, MessageType>
) : Readonly<Simple<Argument, unknown[], Instance<Argument, MessageType>>> {

    return <Readonly<Simple<Argument, unknown[], Instance<Argument, MessageType>>>> new Callback<Argument>(value, ObjectGuard, message);
}

