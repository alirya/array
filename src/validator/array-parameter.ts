import Validator from "@dikac/t-validator/simple";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/validatable";
import ArrayMessage from "../validatable/string/array-parameter";
import Dynamic from "@dikac/t-validator/message/function/validatable";
import ArrayParameters from "./array-parameters";

/**
 *  validate if value is array
 */

export default function ArrayParameter() : Validator<unknown, Array<any>, Readonly<Instance<unknown, string>>>;

export default function ArrayParameter<MessageType>(
    message : Dynamic.Parameter<Value, MessageType>
) : Validator<unknown, Array<any>, Readonly<Instance<unknown, MessageType>>>;

export default function ArrayParameter<MessageType>(
    message : Dynamic.Parameter<Value, MessageType|string> = ArrayMessage
) : Validator<unknown, Array<any>, Readonly<Instance<unknown, MessageType|string>>> {

    return ArrayParameters((value, valid) => message({valid, value}))
}
