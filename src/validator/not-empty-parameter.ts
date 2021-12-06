import Validator from "@dikac/t-validator/validator";
import NotEmptyValidatable, {NotEmptyType} from "../validatable/not-empty-parameters";
import NotEmptyMessage from "../validatable/string/not-empty-parameter";
import Dynamic from "@dikac/t-validator/message/function/validatable";
import NotEmptyParameters from "./not-empty-parameters";

export default function NotEmptyParameter () : Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyType<Array<any>, string>>;

export default function NotEmptyParameter<MessageType> (
    message : Dynamic.Parameter<ReadonlyArray<any>, MessageType>
) : Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyType<Array<any>, MessageType>>;

export default function NotEmptyParameter<MessageType> (
    message : Dynamic.Parameter<ReadonlyArray<any>, MessageType|string> = NotEmptyMessage
) : Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyType<Array<any>, MessageType|string>> {

    return NotEmptyParameters(
        (value, valid) => message({value, valid})
    );
}

