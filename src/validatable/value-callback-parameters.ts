import Validator from "@alirya/validator/validator";
import Validatable from "@alirya/validatable/validatable";
import Instance from "@alirya/validator/validatable/validatable";
import Value from "./value";
import MemoizeAccessor from "@alirya/object/function/memoize-accessor";

export default class ValueCallbackParameters<
    ValueType,
    ValidatorList extends Validator<ValueType>[] = Validator<ValueType>[],
    Results extends Instance[] = Instance[],
    MessageType = unknown,
    ValidatableType extends Validatable = Validatable
>  implements Value<ValueType, ValidatorList, Results, MessageType, ValidatableType> {

    readonly validatable : ValidatableType;
    readonly valid;
    readonly validatables : Results;
    readonly messages : Results;
    #message : (results:Results)=>MessageType

    constructor(
        readonly value: ValueType,
        readonly validators : ValidatorList,
        map : (value:ValueType, validators:ValidatorList)=>Results,
        validation : (results:Results)=>ValidatableType,
        message : (results:Results)=>MessageType,
    ) {
        this.#message = message;

        this.validatables = map(value, this.validators);
        this.validatable = validation(this.validatables);
        this.valid = this.validatable.valid;
        this.messages = this.validatables;
    }

    @MemoizeAccessor()
    get message() : MessageType {

        return this.#message(this.validatables);
    }
}

