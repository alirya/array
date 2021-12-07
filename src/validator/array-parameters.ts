import Validator from "@dikac/t-validator/simple";
import Value from "@dikac/t-value/value";
import ArrayValidatable from "../validatable/array-parameters";
import Instance from "@dikac/t-validator/validatable/validatable";
import ArrayMessage from "../validatable/string/array-parameters";
import MessageCallback from "@dikac/t-validator/message/function/validatable-parameters";

/**
 *  validate if value is array
 */

export default function ArrayParameters() : Validator<unknown, Array<any>, Readonly<Instance<unknown, string>>>;

export default function ArrayParameters<MessageType>(
    message : MessageCallback<Value, MessageType>
) : Validator<unknown, Array<any>, Readonly<Instance<unknown, MessageType>>>;

export default function ArrayParameters<MessageType>(
    message : MessageCallback<Value, MessageType|string> = ArrayMessage
) : Validator<unknown, Array<any>, Readonly<Instance<unknown, MessageType>>> {

    return function (value) {

        return  ArrayValidatable(value, message);

    } as Validator<unknown, Array<any>, Readonly<Instance<unknown, MessageType>>>
}
