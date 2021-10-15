import ArrayValidatable from "../validatable/array";
/**
 *  validate if value is array
 */
// export default class Array_<MessageType>
//     implements
//         Validator<unknown, Array<any>, Readonly<Instance<unknown, MessageType>>>,
//         Message<(result:Readonly<Value> & Readonly<Validatable>)=>MessageType>
// {
//
//     constructor(
//        public message : (result:Readonly<Value> & Readonly<Validatable>)=>MessageType
//     ) {
//     }
//
//     validate<Argument extends Array<any>>(value: Argument) : Readonly<Instance<Argument, MessageType, true>>
//     validate<Argument extends unknown>(value: Argument) : Return<unknown, Argument, Array<any>, Readonly<Instance<Argument, MessageType>>>
//     validate<Argument extends unknown>(value: Argument)  {
//
//         return  ArrayValidatable(value, this.message);
//     }
// }
export default function Array_(message) {
    return function (value) {
        return ArrayValidatable(value, message);
    };
}
//# sourceMappingURL=array.js.map