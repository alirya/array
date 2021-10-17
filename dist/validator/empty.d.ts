import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import EmptyValidatable from "../validatable/empty";
/**
 *  validate if array is empty
 */
export default function Empty(): Validator<Array<any>, [], boolean, boolean, EmptyValidatable<string, Array<any>>>;
export default function Empty<MessageType>(message: (result: Value<Array<any>> & Readonly<Validatable>) => MessageType): Validator<Array<any>, [], boolean, boolean, EmptyValidatable<MessageType, Array<any>>>;
