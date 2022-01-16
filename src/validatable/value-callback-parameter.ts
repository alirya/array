import Validator from "@alirya/validator/validator";
import Validatable from "@alirya/validatable/validatable";
import Instance from "@alirya/validator/validatable/validatable";
import ValueInterface from "@alirya/value/value";
import Validators from "../validator/validators/validators";
import Message from "@alirya/message/message";
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

