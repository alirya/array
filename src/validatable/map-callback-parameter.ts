import Validator from "@alirya/validator/validator";
import Validatable from "@alirya/validatable/validatable";
import ListParameter from "../validator/subject/list/allow";
import Instance from "@alirya/validator/validatable/validatable";
import ValueInterface from "@alirya/value/value";
import ValidatorsContainer from "../validator/validators/validators";
import Message from "@alirya/message/message";
import MapCallbackParameters from "./map-callback-parameters";

export type ValueCallbackArgument<
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

export default class MapCallbackParameter<
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
    } : ValueCallbackArgument<Validators, Result, MessageType, ValidatableType, ValueType>) {
        super(value, validators, map, validation, message);
    }
}


