import Callback from "@dikac/t-validator/validatable/callback";
import ObjectGuard from "../boolean/array";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Construct from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";


export default function Array<Message, Argument>(
    value : Argument,
    message : (result:Readonly<Value<Argument> & Validatable>)=>Message
) : Readonly<Construct<any, Argument, any[], Instance<unknown, Message>>> {

    return <Readonly<Construct<any, Argument, any[], Instance<unknown, Message>>>> Callback(value, ObjectGuard, message);
}
