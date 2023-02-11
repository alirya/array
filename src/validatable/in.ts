import Validatable from '@alirya/validatable/validatable.js';
import MemoizeAccessor from '@alirya/object/function/memoize-accessor.js';
import ValueInterface from '@alirya/value/value.js';
import Message from '@alirya/message/message.js';
import Value from '@alirya/value/value.js';
import ReadonlyList from '../array/readonly.js';
import Callable from '@alirya/function/callable.js';

export interface InType<
    ValueType extends unknown,
    MessageType = unknown,
> extends
    Readonly<Value<ValueType>>,
    Readonly<Validatable>,
    Readonly<ReadonlyList<ValueType>>,
    Readonly<Message<MessageType>> {
}

export type InArgumentsMessage<
    ValueType extends unknown,
    MessageType = unknown,
> = Callable<[ValueType, boolean, ReadonlyArray<ValueType>], MessageType>;

export class InParameters<
    ValueType extends unknown,
    MessageType = unknown,
>  implements InType<ValueType, MessageType> {

    #message : Callable<[ValueType, boolean, ReadonlyArray<ValueType>], MessageType>;

    constructor(
        readonly value: ValueType,
        readonly array: ReadonlyArray<ValueType>,
        readonly validation : (value:ValueType, list: ReadonlyArray<ValueType>)=>boolean,
        message : InArgumentsMessage<ValueType, MessageType>,
    ) {

        this.#message = message;
    }

    @MemoizeAccessor()
    get valid() : boolean {
        return this.validation(this.value, this.array);
    }

    @MemoizeAccessor()
    get message() : MessageType {

        try {

            return this.#message(this.value, this.valid, this.array);

        } catch (e) {

            throw new Error(`error on generating message, ${e}`);
        }

    }
}



export type InArgument<
    ValueType extends unknown,
    MessageType = unknown,
> =
    ValueInterface<ValueType> &
    Readonly<ReadonlyList<ValueType>> &
    {validation : (results:Pick<InType<ValueType, MessageType>, 'value'|'array'>)=>boolean} &
    Message<InArgumentMessage<ValueType, MessageType>>
;


export type InArgumentMessage<
    ValueType extends unknown,
    MessageType = unknown,
> = Callable<[Omit<InType<ValueType, MessageType>, 'message'>], MessageType>;

export class InParameter<
    ValueType extends unknown,
    MessageType = unknown,
> extends InParameters<
    ValueType,
    MessageType
> {

    constructor({
        value,
        array,
        validation,
        message,
    } : InArgument<ValueType, MessageType>) {

        super(
            value,
            array,
            (value, array) => validation({value, array}),
            (value, valid, array) => message({value, valid, array})
        );
    }
}




namespace In {
    export const Parameters = InParameters;
    export const Parameter = InParameter;
    export type Type<
        ValueType extends unknown[],
        MessageType = unknown
    > = InType<
        ValueType,
        MessageType
    >;
    export type Argument<
        ValueType extends unknown,
        MessageType = unknown
    > = InArgument<
        ValueType,
        MessageType
    >;

    export type ArgumentsMessage<
        ValueType extends unknown,
        MessageType = unknown
    > = InArgumentsMessage<
        ValueType,
        MessageType
    >;
    export type ArgumentMessage<
        ValueType extends unknown,
        MessageType = unknown
    > = InArgumentMessage<
        ValueType,
        MessageType
    >;
}
export default In;
