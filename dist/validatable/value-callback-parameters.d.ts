import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Value from "./value";
export default class ValueCallbackParameters<ValueType, ValidatorList extends Validator[] = Validator[], Results extends Instance[] = Instance[], MessageType = unknown, ValidatableType extends Validatable = Validatable> implements Value<ValueType, ValidatorList, Results, MessageType, ValidatableType> {
    #private;
    readonly value: ValueType;
    readonly validators: ValidatorList;
    readonly validatable: ValidatableType;
    readonly valid: any;
    readonly validatables: Results;
    readonly messages: Results;
    constructor(value: ValueType, validators: ValidatorList, map: (value: ValueType, validators: ValidatorList) => Results, validation: (results: Results) => ValidatableType, message: (results: Results) => MessageType);
    get message(): MessageType;
}
