import NotEmptyValidatable from "../validatable/not-empty";
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
export default function NotEmpty(message) {
    return function (value) {
        return new NotEmptyValidatable(value, message);
    };
}
//# sourceMappingURL=not-empty.js.map