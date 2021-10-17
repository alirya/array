import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NotEmptyValidatable from "../validatable/not-empty";
import Construct from "@dikac/t-validator/validatable/simple";
import NotEmptyMessage from "../validatable/string/not-empty";

export default function NotEmpty () : Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyValidatable<string, Array<any>>>;

export default function NotEmpty<MessageType> (
    message : (result:Readonly<Value<Array<any>>> & Readonly<Validatable>)=>MessageType
) : Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyValidatable<MessageType, Array<any>>>;

export default function NotEmpty<MessageType> (
    message : (result:Readonly<Value<Array<any>>> & Readonly<Validatable>)=>MessageType|string = NotEmptyMessage
) : Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyValidatable<MessageType, Array<any>>> {

    return function (value) {

        return new NotEmptyValidatable(value, message);

    } as Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyValidatable<MessageType, Array<any>>>
}

