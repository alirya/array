import Validator from "@alirya/validator/validator";
import Validatable from "@alirya/validatable/validatable";
import ListParameter from "../validator/subject/list/allow";
import Instance from "@alirya/validator/validatable/validatable";
import Map from "./map";
import MemoizeAccessor from "@alirya/object/function/memoize-accessor";


export default class MapCallbackParameters<
    Validators extends Validator[] = Validator[],
    Result extends Instance[] = Instance[],
    MessageType = unknown,
    ValidatableType extends Validatable = Validatable,
    ValueType extends ListParameter<Validators> = ListParameter<Validators>
    > implements Map<Validators, Result, MessageType, ValidatableType/*, ValueType*/> {

    #message : (result:Result)=>MessageType;
    #value : ValueType;
    readonly validatable : ValidatableType;
    readonly validatables : Result

    constructor(
        value : ValueType,
        readonly validators : Validators,
        private map : (value:ListParameter<Validators>, validators:Validators)=>Result,
        private validation : (result:Result)=>ValidatableType,
        message : (result:Result)=>MessageType,
    ) {

        this.#value = value;
        this.#message = message;
        this.validatables = this.map(this.value, this.validators);
        this.validatable = this.validation(this.validatables);

    }

    @MemoizeAccessor()
    get value() : ValueType {

        return this.#value.slice(0, this.validators.length) as ValueType;
    }

    get valid() : boolean {

        return this.validatable.valid;
    }

    get messages() : Result {

        return this.validatables;
    }

    @MemoizeAccessor()
    get message() : MessageType {

        try {

            return this.#message(this.validatables);

        } catch (e) {

            throw new Error(`error on generating message, ${e}`)
        }
    }
}




