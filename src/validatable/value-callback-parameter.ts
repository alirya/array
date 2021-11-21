import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/dynamic";
import ValueInterface from "@dikac/t-value/value";
import Validators from "../validator/validators/validators";
import Message from "@dikac/t-message/message";
import ValueCallbackParameters from "./value-callback-parameters";

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

export default class ValueCallbackParameter<
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

