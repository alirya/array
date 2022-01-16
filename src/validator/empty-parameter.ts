import Validator from "@alirya/validator/validator";
import EmptyMessage from "../validatable/string/empty-parameter";
import MessageCallback from "@alirya/validator/message/function/validatable-parameter";
import EmptyParameters from "./empty-parameters";
import Validatable from "@alirya/validator/validatable/validatable";

/**
 *  validate if array is empty
 */

export default function EmptyParameter() : Validator<Array<any>, [], boolean, boolean, Validatable<Array<any>, string>>

export default function EmptyParameter<MessageType>(
    message : MessageCallback<Array<any>, MessageType>
) : Validator<Array<any>, [], boolean, boolean, Validatable<Array<any>, MessageType>>

export default function EmptyParameter<MessageType>(
    message : MessageCallback<Array<any>, MessageType|string> = EmptyMessage
) : Validator<Array<any>, [], boolean, boolean, Validatable<Array<any>, MessageType|string>> {

    return EmptyParameters((value, valid) => message({value, valid}));
}
