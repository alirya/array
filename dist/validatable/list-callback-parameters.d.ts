import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/dynamic";
import List from "./list";
export default class ListCallbackParameters<ValueType extends unknown[], ValidatorType extends Validator = Validator, Results extends Instance[] = Instance[], MessageType = unknown, ValidatableType extends Validatable = Validatable> implements List<ValueType, ValidatorType, Results, MessageType, ValidatableType> {
    readonly value: ValueType;
    readonly validator: ValidatorType;
    readonly validatable: any;
    readonly valid: any;
    readonly validatables: Results;
    readonly messages: Results;
    private messageFactory;
    constructor(value: ValueType, validator: ValidatorType, map: (value: ValueType, validator: ValidatorType) => Results, validation: (results: Results) => ValidatableType, message: (results: Results) => MessageType);
    get message(): MessageType;
}
