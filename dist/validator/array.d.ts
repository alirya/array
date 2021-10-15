import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/validatable";
/**
 *  validate if value is array
 */
export default function Array_<MessageType>(message: (result: Readonly<Value> & Readonly<Validatable>) => MessageType): Validator<unknown, Array<any>, Readonly<Instance<unknown, MessageType>>>;
