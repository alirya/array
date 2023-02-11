import Validator from '@alirya/validator/validator.js';
import Validatable from '@alirya/validatable/validatable.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import MemoizeAccessor from '@alirya/object/function/memoize-accessor.js';
import ValueInterface from '@alirya/value/value.js';
import Validators from '../validator/validators/validators.js';
import Message from '@alirya/message/message.js';
import BaseValue from '@alirya/value/value.js';
import Messages from '../message/messages/messages.js';
import ValidatableContainer from '@alirya/validatable/validatable/validatable.js';
import Validatables from './validatables/validatables.js';
import ValidatorValidatable from '@alirya/validator/validatable/validatable.js';

export interface ValueCallbackContext<
    Container extends Validator[],
    Results extends Instance[],
    ValidatableType extends Validatable
> extends
    Validators<Container>,
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
>  implements ValidatorValidatable<ValueType, MessageType>, ValueCallbackContext<ValidatorList, Results, ValidatableType> {

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
    ValidatorList extends Validator<ValueType>[] = Validator<ValueType>[],
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
    Container extends Validator<ValueType>[] = Validator<ValueType>[],
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
    export type Context<
        Container extends Validator[],
        Results extends Instance[],
        ValidatableType extends Validatable
    > = ValueCallbackContext<
        Container,
        Results,
        ValidatableType
    >;
    export type Argument<
        ValueType,
        ValidatorList extends Validator<ValueType>[] = Validator<ValueType>[],
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
