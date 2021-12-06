import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/validatable";
import ValueInterface from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import ListCallbackParameters from "./list-callback-parameters";
export declare type ValueCallbackArgument<ValueType extends unknown[], ValidatorType extends Validator = Validator, Results extends Instance[] = Instance[], MessageType = unknown, ValidatableType extends Validatable = Validatable> = ValueInterface<ValueType> & ValidatorContainer<ValidatorType> & {
    map: (value: ValueType, validator: ValidatorType) => Results;
} & {
    validation: (results: Results) => ValidatableType;
} & Message<(results: Results) => MessageType>;
export default class ListCallbackParameter<ValueType extends unknown[], ValidatorType extends Validator = Validator, Results extends Instance[] = Instance[], MessageType = unknown, ValidatableType extends Validatable = Validatable> extends ListCallbackParameters<ValueType, ValidatorType, Results, MessageType, ValidatableType> {
    constructor({ value, validator, map, validation, message, }: ValueCallbackArgument<ValueType, ValidatorType, Results, MessageType, ValidatableType>);
}
