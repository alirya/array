import Validator from "@alirya/validator/validator";
import Validatable from "@alirya/validatable/validatable";
import Instance from "@alirya/validator/validatable/validatable";
import ValueInterface from "@alirya/value/value";
import Message from "@alirya/message/message";
import ValidatorContainer from "@alirya/validator/validator/validator";
import ListCallbackParameters from "./liscallback-parameters";

export type ValueCallbackArgument<
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

export default class ListCallbackParameter<
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
    } : ValueCallbackArgument<ValueType, ValidatorType, Results, MessageType, ValidatableType>) {
        super(value, validator, map, validation, message);
    }
}


