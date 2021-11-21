import Validator from "@dikac/t-validator/simple";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Dynamic from "@dikac/t-validator/message/function/dynamic";
/**
 *  validate if value is array
 */
export default function ArrayParameters(): Validator<unknown, Array<any>, Readonly<Instance<unknown, string>>>;
export default function ArrayParameters<MessageType>(message: Dynamic.Parameters<Value, MessageType>): Validator<unknown, Array<any>, Readonly<Instance<unknown, MessageType>>>;
