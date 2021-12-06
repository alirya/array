import Validator from "@dikac/t-validator/validator";
import NotEmptyValidatable, {NotEmptyType} from "../validatable/not-empty-parameters";
import NotEmptyMessage from "../validatable/string/not-empty-parameters";
import Dynamic from "@dikac/t-validator/message/function/validatable";

export default function NotEmptyParameters () : Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyType<Array<any>, string>>;

export default function NotEmptyParameters<MessageType> (
    message : Dynamic.Parameters<ReadonlyArray<any>, MessageType>
) : Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyType<Array<any>, MessageType>>;

export default function NotEmptyParameters<MessageType> (
    message : Dynamic.Parameters<ReadonlyArray<any>, MessageType|string> = NotEmptyMessage
) : Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyType<Array<any>, MessageType>> {

    return function (value) {

        return new NotEmptyValidatable(value, message);

    } as Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyType<Array<any>, MessageType>>
}

