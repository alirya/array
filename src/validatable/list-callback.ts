import Validator from '@alirya/validator/validator.js';
import Validatable from '@alirya/validatable/validatable.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import MemoizeAccessor from '@alirya/object/function/memoize-accessor.js';
import ValueInterface from '@alirya/value/value.js';
import Message from '@alirya/message/message.js';
import ValidatorContainer from '@alirya/validator/validator/validator.js';
import Value from '@alirya/value/value.js';
import Messages from '../message/messages/messages.js';
import Validatables from './validatables/validatables.js';
import ValidatableContainer from '@alirya/validatable/validatable/Validatable.js';

export interface ListCallbackType<
    ValueType extends unknown[],
    ValidatorType extends Validator = Validator,
    Results extends Instance[] = Instance[],
    MessageType = unknown,
    ValidatableType extends Validatable = Validatable
> extends
    Readonly<Value<ValueType>>,
    Readonly<Validatable>,
    Readonly<ValidatorContainer<ValidatorType>>,
    Readonly<Message<MessageType>>,
    Readonly<Messages<Results>>,
    Readonly<Validatables<Results>>,
    Readonly<ValidatableContainer<ValidatableType>> {
}

export class ListCallbackParameters<
    ValueType extends unknown[],
    ValidatorType extends Validator = Validator,
    Results extends Instance[] = Instance[],
    MessageType = unknown,
    ValidatableType extends Validatable = Validatable
>  implements ListCallbackType<ValueType, ValidatorType, Results, MessageType, ValidatableType>{

    readonly validatable;
    readonly valid;
    readonly validatables : Results;
    readonly messages : Results;
    private messageFactory : (results:Results)=>MessageType;

    constructor(
        readonly value: ValueType,
        readonly validator : ValidatorType,
        map : (value:ValueType, validator:ValidatorType)=>Results,
        validation : (results:Results)=>ValidatableType,
        message : (results:Results)=>MessageType,
    ) {

        this.messageFactory = message;

        this.validatables = map(value, this.validator);
        this.validatable = validation(this.validatables);
        this.valid = this.validatable.valid;
        this.messages = this.validatables;
    }

    @MemoizeAccessor()
    get message() : MessageType {

        try {

            return this.messageFactory(this.validatables);

        } catch (e) {

            throw new Error(`error on generating message, ${e}`);
        }

    }
}








export type ListCallbackArgument<
    ValueType extends unknown[],
    ValidatorType extends Validator = Validator,
    Results extends Instance[] = Instance[],
    MessageType = unknown,
    ValidatableType extends Validatable = Validatable
> =
    ValueInterface<ValueType> &
    ValidatorContainer<ValidatorType> &
    {map : (value:ValueType, validator:ValidatorType)=>Results} &
    {validation : (results:Results)=>ValidatableType} &
    Message<(results:Results)=>MessageType>
;

export class ListCallbackParameter<
    ValueType extends unknown[],
    ValidatorType extends Validator = Validator,
    Results extends Instance[] = Instance[],
    MessageType = unknown,
    ValidatableType extends Validatable = Validatable
> extends ListCallbackParameters<
    ValueType,
    ValidatorType,
    Results,
    MessageType,
    ValidatableType
> {

    constructor({
        value,
        validator,
        map,
        validation,
        message,
    } : ListCallbackArgument<ValueType, ValidatorType, Results, MessageType, ValidatableType>) {
        super(value, validator, map, validation, message);
    }
}




namespace ListCallback {
    export const Parameters = ListCallbackParameters;
    export const Parameter = ListCallbackParameter;
    export type Type<
        ValueType extends unknown[],
        ValidatorType extends Validator = Validator,
        Results extends Instance[] = Instance[],
        MessageType = unknown,
        ValidatableType extends Validatable = Validatable
    > = ListCallbackType<
        ValueType,
        ValidatorType,
        Results,
        MessageType,
        ValidatableType
    >;
    export type Argument<
        ValueType extends unknown[],
        ValidatorType extends Validator = Validator,
        Results extends Instance[] = Instance[],
        MessageType = unknown,
        ValidatableType extends Validatable = Validatable
    > = ListCallbackArgument<
        ValueType,
        ValidatorType,
        Results,
        MessageType,
        ValidatableType
    >;
}
export default ListCallback;
