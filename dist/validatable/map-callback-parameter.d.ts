import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ListParameter from "../validator/subject/list/allow";
import Instance from "@dikac/t-validator/validatable/validatable";
import ValueInterface from "@dikac/t-value/value";
import ValidatorsContainer from "../validator/validators/validators";
import Message from "@dikac/t-message/message";
import MapCallbackParameters from "./map-callback-parameters";
export declare type ValueCallbackArgument<Validators extends Validator[] = Validator[], Result extends Instance[] = Instance[], MessageType = unknown, ValidatableType extends Validatable = Validatable, ValueType extends ListParameter<Validators> = ListParameter<Validators>> = ValueInterface<ValueType> & ValidatorsContainer<Validators> & {
    map: (value: ListParameter<Validators>, validators: Validators) => Result;
} & {
    validation: (result: Result) => ValidatableType;
} & Message<(result: Result) => MessageType>;
export default class MapCallbackParameter<Validators extends Validator[] = Validator[], Result extends Instance[] = Instance[], MessageType = unknown, ValidatableType extends Validatable = Validatable, ValueType extends ListParameter<Validators> = ListParameter<Validators>> extends MapCallbackParameters<Validators, Result, MessageType, ValidatableType, ValueType> {
    constructor({ value, validators, map, validation, message, }: ValueCallbackArgument<Validators, Result, MessageType, ValidatableType, ValueType>);
}
