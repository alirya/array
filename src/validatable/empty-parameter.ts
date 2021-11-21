import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validator/validatable/dynamic";
import EmptyParameters from "./empty-parameters";
import Dynamic from "@dikac/t-validator/message/function/dynamic";



export default function EmptyParameter<MessageType, Values extends unknown[]>(
    // value : Values,
    // message : (result:Readonly<Value<Values> & Validatable>)=>MessageType,
    {
        value,
        message,
    } : Value<Values> & Message<Dynamic.Parameter<Values, MessageType>>
) : Readonly<Validatable<Values, MessageType>> {

    return EmptyParameters(value, (value, valid) => message({value, valid}));
}

