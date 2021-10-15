import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NotEmptyValidatable from "../validatable/not-empty";
import Construct from "@dikac/t-validator/validatable/simple";

// export default class NotEmpty<MessageType>
//     implements
//         Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyValidatable<MessageType, Array<any>>>,
//         Message<(result:Readonly<Value<Array<any>>> & Readonly<Validatable>)=>MessageType>
// {
//
//     constructor(
//         public message : (result:Readonly<Value<Array<any>>> & Readonly<Validatable>)=>MessageType
//     ) {
//
//     }
//
//     validate<Argument extends Array<any>>(value: Argument) : Construct<Array<any>, Argument, Array<any>, NotEmptyValidatable<MessageType, Array<any>>> {
//
//         return <Construct<Array<any>, Argument, Array<any>, NotEmptyValidatable<MessageType, Array<any>>> > new NotEmptyValidatable(value, this.message);
//     }
// }

export default function NotEmpty<MessageType> (
    message : (result:Readonly<Value<Array<any>>> & Readonly<Validatable>)=>MessageType
) : Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyValidatable<MessageType, Array<any>>> {

    return function <Argument extends Array<any>>(value: Argument) {

        return new NotEmptyValidatable(value, message);

    } as Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyValidatable<MessageType, Array<any>>>
}

