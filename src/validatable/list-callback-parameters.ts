import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/validatable";
import List from "./list";
import MemoizeAccessor from "@dikac/t-object/function/memoize-accessor";

export default class ListCallbackParameters<
    ValueType extends unknown[],
    ValidatorType extends Validator = Validator,
    Results extends Instance[] = Instance[],
    MessageType = unknown,
    ValidatableType extends Validatable = Validatable
>  implements List<ValueType, ValidatorType, Results, MessageType, ValidatableType>{

    readonly validatable;
    readonly valid;
    readonly validatables : Results;
    readonly messages : Results;
    private messageFactory : (results:Results)=>MessageType

    constructor(
        readonly value: ValueType,
        readonly validator : ValidatorType,
        map : (value:ValueType, validator:ValidatorType)=>Results,
        validation : (results:Results)=>ValidatableType,
        message : (results:Results)=>MessageType,
    ) {

        this.messageFactory = message;

        this.validatables = map(value, this.validator);
        this.validatable = validation(this.validatables);
        this.valid = this.validatable.valid;
        this.messages = this.validatables;
    }

    @MemoizeAccessor()
    get message() : MessageType {

        try {

            return this.messageFactory(this.validatables);

        } catch (e) {

            throw new Error(`error on generating message, ${e}`)
        }

    }
}






