import EmptyArgument from "../boolean/empty";
import Callback from "@alirya/validator/validatable/callback-class-parameters";
import Validatable from "@alirya/validator/validatable/validatable";
import MessageCallback from "@alirya/validator/message/function/validatable-parameters";

export default function EmptyParameters<Values extends unknown[], MessageType>(
    value : Values,
    message : MessageCallback<Values, MessageType>,
) : Readonly<Validatable<Values, MessageType>> {

    return new Callback<Values>(value, EmptyArgument, message) as Readonly<Validatable<Values, MessageType>>
}

