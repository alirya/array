import Validator from "@dikac/t-validator/validator";
import EmptyMessage from "../validatable/string/empty-parameter";
import Dynamic from "@dikac/t-validator/message/function/dynamic";
import EmptyParameters from "./empty-parameters";
import Validatable from "@dikac/t-validator/validatable/dynamic";

/**
 *  validate if array is empty
 */

export default function EmptyParameter() : Validator<Array<any>, [], boolean, boolean, Validatable<Array<any>, string>>

export default function EmptyParameter<MessageType>(
    message : Dynamic.Parameter<Array<any>, MessageType>
) : Validator<Array<any>, [], boolean, boolean, Validatable<Array<any>, MessageType>>

export default function EmptyParameter<MessageType>(
    message : Dynamic.Parameter<Array<any>, MessageType|string> = EmptyMessage
) : Validator<Array<any>, [], boolean, boolean, Validatable<Array<any>, MessageType|string>> {

    return EmptyParameters((value, valid) => message({value, valid}));
}
