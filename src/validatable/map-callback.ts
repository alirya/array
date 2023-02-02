import Validator from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import ListParameter from '../validator/subject/list/allow';
import Instance from '@alirya/validator/validatable/validatable';
import MemoizeAccessor from '@alirya/object/function/memoize-accessor';
import ValueInterface from '@alirya/value/value';
import ValidatorsContainer from '../validator/validators/validators';
import Message from '@alirya/message/message';
import Validators from '../validator/validators/validators';
import Value from '@alirya/value/value';
import Validatables from './validatables/validatables';
import ValidatableContainer from '@alirya/validatable/validatable/validatable';
import Messages from '../message/messages/messages';
import ValidatorValidatable from '@alirya/validator/validatable/validatable';

export interface MapCallbackContext<
    ValidatorsType extends Validator[],
    Result extends Instance[],
    ValidatableType extends Validatable,
> extends
    Readonly<Validators<ValidatorsType>>,
    Readonly<Validatables<Result>>,
    Readonly<ValidatableContainer<ValidatableType>>,
    Readonly<Messages<Result>> {

}


export class MapCallbackParameters<
    Validators extends Validator[] = Validator[],
    Result extends Instance[] = Instance[],
    MessageType = unknown,
    ValidatableType extends Validatable = Validatable,
    ValueType extends ListParameter<Validators> = ListParameter<Validators>
    > implements ValidatorValidatable<ValueType, MessageType>, MapCallbackContext<Validators, Result, ValidatableType> {

    #message : (result:Result)=>MessageType;
    #value : ValueType;
    readonly validatable : ValidatableType;
    readonly validatables : Result;

    constructor(
        value : ValueType,
        readonly validators : Validators,
        private map : (value:ListParameter<Validators>, validators:Validators)=>Result,
        private validation : (result:Result)=>ValidatableType,
        message : (result:Result)=>MessageType,
    ) {

        this.#value = value;
        this.#message = message;
        this.validatables = this.map(this.value, this.validators);
        this.validatable = this.validation(this.validatables);

    }

    @MemoizeAccessor()
    get value() : ValueType {

        return this.#value.slice(0, this.validators.length) as ValueType;
    }

    get valid() : boolean {

        return this.validatable.valid;
    }

    get messages() : Result {

        return this.validatables;
    }

    @MemoizeAccessor()
    get message() : MessageType {

        try {

            return this.#message(this.validatables);

        } catch (e) {

            throw new Error(`error on generating message, ${e}`);
        }
    }
}






export type MapCallbackArgument<
    Validators extends Validator[] = Validator[],
    Result extends Instance[] = Instance[],
    MessageType = unknown,
    ValidatableType extends Validatable = Validatable,
    ValueType extends ListParameter<Validators> = ListParameter<Validators>
> =
    ValueInterface<ValueType> &
    ValidatorsContainer<Validators> &
    {map : (value:ListParameter<Validators>, validators:Validators)=>Result} &
    {validation : (result:Result)=>ValidatableType} &
    Message<(result:Result)=>MessageType>
;

export class MapCallbackParameter<
    Validators extends Validator[] = Validator[],
    Result extends Instance[] = Instance[],
    MessageType = unknown,
    ValidatableType extends Validatable = Validatable,
    ValueType extends ListParameter<Validators> = ListParameter<Validators>
> extends MapCallbackParameters<
    Validators,
    Result,
    MessageType,
    ValidatableType,
    ValueType
> {

    constructor({
        value,
        validators,
        map,
        validation,
        message,
    } : MapCallbackArgument<Validators, Result, MessageType, ValidatableType, ValueType>) {
        super(value, validators, map, validation, message);
    }
}




namespace MapCallback {
    export const Parameters = MapCallbackParameters;
    export const Parameter = MapCallbackParameter;
    export type Context<
        ValidatorsType extends Validator[],
        Result extends Instance[],
        ValidatableType extends Validatable,
    > = MapCallbackContext<
        ValidatorsType,
        Result,
        ValidatableType
    >;
    export type Argument<
        Validators extends Validator[] = Validator[],
        Result extends Instance[] = Instance[],
        MessageType = unknown,
        ValidatableType extends Validatable = Validatable,
        ValueType extends ListParameter<Validators> = ListParameter<Validators>
    > = MapCallbackArgument<
        Validators,
        Result,
        MessageType,
        ValidatableType,
        ValueType
    >;
}
export default MapCallback;
