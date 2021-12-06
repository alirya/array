import EmptyArgument from "../boolean/empty";
import Callback from "@dikac/t-validator/validatable/callback-class-parameters";
import Validatable from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/validatable";

//
// export type EmptyParameterType<Values extends unknown[], MessageType> = Readonly<Validatable<Values, MessageType>>;

export default function EmptyParameters<Values extends unknown[], MessageType>(
    value : Values,
    message : Dynamic.Parameters<Values, MessageType>,
) : Readonly<Validatable<Values, MessageType>> {

    return new Callback<Values>(value, EmptyArgument, message) as Readonly<Validatable<Values, MessageType>>
}

// export function EmptyObject<MessageType, Values extends unknown[]>(
//     // value : Values,
//     // message : (result:Readonly<Value<Values> & Validatable>)=>MessageType,
//     {
//         value,
//         message,
//     } : Value<Values> & Message<(result:Readonly<Value<Values> & Validatable>)=>MessageType>
// ) : Readonly<Validatable<Values, MessageType>> {
//
//     return new Callback.Parameter(value, EmptyArgument, message)
// }


//
//
// export default class Empty<MessageType, Values extends unknown[]>
//     implements
//         Readonly<Value<Values>>,
//         Readonly<Message<MessageType>>,
//         Readonly<Validatable>,
//         Iterable<List.UnionOf<Values>>
// {
//     readonly valid : boolean;
//     #message : (result:Readonly<Value<Values> & Validatable>)=>MessageType;
//
//     constructor(
//         readonly value : Values,
//         message : (result:Readonly<Value<Values> & Validatable>)=>MessageType,
//     ) {
//
//         this.#message = message;
//         this.valid = EmptyArgument(value);
//     }
//
//     * [Symbol.iterator](): Iterator<List.UnionOf<Values>> {
//
//         yield * this.value;
//     }
//
//     get message() : MessageType {
//
//         try {
//
//             return this.#message(this);
//
//         } catch (e) {
//
//             throw new Error(`error on generating message, ${e}`)
//         }
//
//     }
// }
