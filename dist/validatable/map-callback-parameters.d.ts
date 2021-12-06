import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ListParameter from "../validator/subject/list/allow";
import Instance from "@dikac/t-validator/validatable/validatable";
import Map from "./map";
export default class MapCallbackParameters<Validators extends Validator[] = Validator[], Result extends Instance[] = Instance[], MessageType = unknown, ValidatableType extends Validatable = Validatable, ValueType extends ListParameter<Validators> = ListParameter<Validators>> implements Map<Validators, Result, MessageType, ValidatableType> {
    #private;
    readonly validators: Validators;
    private map;
    private validation;
    readonly validatable: ValidatableType;
    readonly validatables: Result;
    constructor(value: ValueType, validators: Validators, map: (value: ListParameter<Validators>, validators: Validators) => Result, validation: (result: Result) => ValidatableType, message: (result: Result) => MessageType);
    get value(): ValueType;
    get valid(): boolean;
    get messages(): Result;
    get message(): MessageType;
}
