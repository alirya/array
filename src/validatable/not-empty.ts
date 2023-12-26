import NotEmptyArgument from '../boolean/not-empty.js';
import {List} from 'ts-toolbelt';
import Instance from '@axiona/validator/validatable/validatable.js';
import {ValidatableParameters, ValidatableParameter} from '@axiona/validator/message/function/validatable.js';
import Message from '@axiona/message/message.js';
import ValueInterface from '@axiona/value/value.js';

export type NotEmptyType<
    Values extends unknown[],
    MessageType,
> =
    Readonly<Instance<Values, MessageType>> &
    Iterable<List.UnionOf<Values>>;

export class NotEmptyParameters<
    Values extends unknown[],
    MessageType,
> implements
    NotEmptyType<Values, MessageType>
{
    readonly valid : boolean;
    #message : ValidatableParameters<Values, MessageType>;

    constructor(
        readonly value : Values,
        message : ValidatableParameters<Values, MessageType>,
    ) {

        this.#message = message;
        this.valid = NotEmptyArgument(value);
    }

    * [Symbol.iterator](): Iterator<List.UnionOf<Values>> {

        yield * this.value;
    }

    get message() : MessageType {

        return this.#message(this.value, this.valid);
    }
}


export type NotEmptyArgument<
    Values extends unknown[],
    MessageType,
> =
    ValueInterface<Values> &
    Message<ValidatableParameter<Values, MessageType>>
;


export class NotEmptyParameter<Values extends unknown[], MessageType> extends NotEmptyParameters<Values, MessageType> {

    constructor({value, message} : NotEmptyArgument<Values, MessageType>) {
        super(value, (value, valid) => message({value, valid}));
    }
}




namespace NotEmpty {
    export const Parameters = NotEmptyParameters;
    export const Parameter = NotEmptyParameter;
    export type Type<
        Values extends unknown[],
        MessageType,
    > = NotEmptyType<
        Values,
        MessageType
    >;
    export type Argument<
        Values extends unknown[],
        MessageType,
    > = NotEmptyArgument<
        Values,
        MessageType
    >;
}
export default NotEmpty;
