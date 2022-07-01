import Validator from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import Instance from '@alirya/validator/validatable/validatable';
import MemoizeAccessor from '@alirya/object/function/memoize-accessor';
import ValueInterface from '@alirya/value/value';
import Validators from '../validator/validators/validators';
import Message from '@alirya/message/message';
import BaseValue from '@alirya/value/value';
import Messages from '../message/messages/messages';
import ValidatableContainer from '@alirya/validatable/validatable/Validatable';
import Validatables from './validatables/validatables';

export interface ValueCallbackType<
    ValueType,
    Container extends Validator[],
    Results extends Instance[],
    MessageType,
    ValidatableType extends Validatable
> extends
    BaseValue<ValueType>,
    Validatable,
    Validators<Container>,
    Message<MessageType>,
    Messages<Results>,
    ValidatableContainer<ValidatableType>,
    Validatables<Results>
{}


export class ValueCallbackParameters<
    ValueType,
    ValidatorList extends Validator<ValueType>[] = Validator<ValueType>[],
    Results extends Instance[] = Instance[],
    MessageType = unknown,
    ValidatableType extends Validatable = Validatable
>  implements ValueCallbackType<ValueType, ValidatorList, Results, MessageType, ValidatableType> {

    readonly validatable : ValidatableType;
    readonly valid;
    readonly validatables : Results;
    readonly messages : Results;
    #message : (results:Results)=>MessageType;

    constructor(
        readonly value: ValueType,
        readonly validators : ValidatorList,
        map : (value:ValueType, validators:ValidatorList)=>Results,
        validation : (results:Results)=>ValidatableType,
        message : (results:Results)=>MessageType,
    ) {
        this.#message = message;

        this.validatables = map(value, this.validators);
        this.validatable = validation(this.validatables);
        this.valid = this.validatable.valid;
        this.messages = this.validatables;
    }

    @MemoizeAccessor()
    get message() : MessageType {

        return this.#message(this.validatables);
    }
}



export type ValueCallbackArgument<
    ValueType,
    ValidatorList extends Validator[] = Validator[],
    Results extends Instance[] = Instance[],
    MessageType = unknown,
    ValidatableType extends Validatable = Validatable
> =
    ValueInterface<ValueType> &
    Validators<ValidatorList> &
    {map : (value:ValueType, validators:ValidatorList)=>Results} &
    {validation : (results:Results)=>ValidatableType} &
    Message<(results:Results)=>MessageType>
;

export class ValueCallbackParameter<
    ValueType,
    Container extends Validator[] = Validator[],
    Results extends Instance[] = Instance[],
    MessageType = unknown,
    ValidatableType extends Validatable = Validatable
> extends ValueCallbackParameters<
    ValueType,
    Container,
    Results,
    MessageType,
    ValidatableType
> {
    constructor({
        value,
        validators,
        map,
        validation,
        message,
    } : ValueCallbackArgument<ValueType, Container, Results, MessageType, ValidatableType>) {
        super(value, validators, map, validation, message);
    }
}



namespace ValueCallback {
    export const Parameters = ValueCallbackParameters;
    export const Parameter = ValueCallbackParameter;
    export type Type<
        ValueType,
        Container extends Validator[],
        Results extends Instance[],
        MessageType,
        ValidatableType extends Validatable
    > = ValueCallbackType<
        ValueType,
        Container,
        Results,
        MessageType,
        ValidatableType
    >;
    export type Argument<
        ValueType,
        ValidatorList extends Validator[] = Validator[],
        Results extends Instance[] = Instance[],
        MessageType = unknown,
        ValidatableType extends Validatable = Validatable
    > = ValueCallbackArgument<
        ValueType,
        ValidatorList,
        Results,
        MessageType,
        ValidatableType
    >;
}
export default ValueCallback;
