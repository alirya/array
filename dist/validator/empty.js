import EmptyValidatable from "../validatable/empty";
/**
 *  validate if array is empty
 */
// export default class Empty<
//     MessageType
// > implements Validator<Array<any>, [], boolean, boolean, EmptyValidatable<MessageType, Array<any>>>,
//     Message<(result:Readonly<Value<Array<any>>> & Readonly<Validatable>)=>MessageType> {
//
//     constructor(
//         public message : (result:Value<Array<any>> & Readonly<Validatable>)=>MessageType
//     ) {
//     }
//
//     validate<Argument extends any[]>(value: Argument): Return<Array<any>, Argument, [], EmptyValidatable<MessageType, Argument>> {
//
//         return <Return<Array<any>, Argument, [], EmptyValidatable<MessageType, Argument>>> new EmptyValidatable<MessageType, Argument>(value, this.message);
//     }
// }
export default function Empty(message) {
    return function (value) {
        return new EmptyValidatable(value, message);
    };
}
//# sourceMappingURL=empty.js.map