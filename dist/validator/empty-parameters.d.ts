import Validator from "@dikac/t-validator/validator";
import MessageCallback from "@dikac/t-validator/message/function/validatable-parameters";
import Validatable from "@dikac/t-validator/validatable/validatable";
/**
 *  validate if array is empty
 */
export default function EmptyParameters(): Validator<Array<any>, [], boolean, boolean, Validatable<Array<any>, string>>;
export default function EmptyParameters<MessageType>(message: MessageCallback<Array<any>, MessageType>): Validator<Array<any>, [], boolean, boolean, Validatable<Array<any>, MessageType>>;
