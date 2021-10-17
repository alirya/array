import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import ArrayValidatable from "../validatable/array";
import Instance from "@dikac/t-validator/validatable/validatable";
import Return from "@dikac/t-validator/validatable/simple";
import ArrayMessage from "../validatable/string/array";

/**
 *  validate if value is array
 */

export default function Array_() : Validator<unknown, Array<any>, Readonly<Instance<unknown, string>>>;

export default function Array_<MessageType>(
    message : (result:Readonly<Value> & Readonly<Validatable>)=>MessageType
) : Validator<unknown, Array<any>, Readonly<Instance<unknown, MessageType>>>;

export default function Array_<MessageType>(
    message : (result:Readonly<Value> & Readonly<Validatable>)=>MessageType|string = ArrayMessage
) : Validator<unknown, Array<any>, Readonly<Instance<unknown, MessageType>>> {

    return function (value) {

        return  ArrayValidatable(value, message);

    } as Validator<unknown, Array<any>, Readonly<Instance<unknown, MessageType>>>
}
