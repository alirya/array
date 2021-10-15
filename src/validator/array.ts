import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import ArrayValidatable from "../validatable/array";
import Instance from "@dikac/t-validator/validatable/validatable";
import Return from "@dikac/t-validator/validatable/simple";

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

export default function Array_<MessageType>(
    message : (result:Readonly<Value> & Readonly<Validatable>)=>MessageType
) : Validator<unknown, Array<any>, Readonly<Instance<unknown, MessageType>>> {

    return function (value) {

        return  ArrayValidatable(value, message);

    } as Validator<unknown, Array<any>, Readonly<Instance<unknown, MessageType>>>
}
