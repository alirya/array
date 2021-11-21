import Validator from "@dikac/t-validator/validator";
import EmptyValidatable from "../validatable/empty-parameters";
import EmptyMessage from "../validatable/string/empty-parameters";
import Dynamic from "@dikac/t-validator/message/function/dynamic";
import Validatable from "@dikac/t-validator/validatable/dynamic";

/**
 *  validate if array is empty
 */

export default function EmptyParameters() : Validator<Array<any>, [], boolean, boolean, Validatable<Array<any>, string>>

export default function EmptyParameters<MessageType>(
    message : Dynamic.Parameters<Array<any>, MessageType>
) : Validator<Array<any>, [], boolean, boolean, Validatable<Array<any>, MessageType>>

export default function EmptyParameters<MessageType>(
    message : Dynamic.Parameters<Array<any>, MessageType|string> = EmptyMessage
) : Validator<Array<any>, [], boolean, boolean, Validatable<Array<any>, MessageType>> {

    return function (value) {

        return EmptyValidatable(value, message);

    } as Validator<Array<any>, [], boolean, boolean, Validatable<Array<any>, MessageType>>
}
