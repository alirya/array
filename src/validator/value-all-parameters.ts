import Validator from "@alirya/validator/validator";
import Validatable from "@alirya/validatable/validatable";
import ValidateValue from "./validatable/list/value-parameters";
import ListReturn from "./validatable/list/infer";
import ValueCallback from "./value-callback-parameters";
import Value from "./value";
import InferMessage from "../message/message/list/infer";
import Map from "../message/message/list/map";
import {List} from "ts-toolbelt";
import Allow from "./subject/list/allow";
import Expectation from "./subject/list/expectation";


/**
 * more specific implementation of {@link ValueCallback}
 *
 * Validate value with all list of {@link Validator}
 *
 * @param validators
 * list of {@link Validator} to be used against value
 *
 * @param validation
 * combined all result from {@link Validator} list into {@link Validatable}
 *
 * @param message
 * combined all result from {@link Validator} list into {@link Message} value
 */
export default function ValueAllParameters<
    Validators extends Validator[] = Validator[],
    ReturnType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validators : Validators,
    validation : (result:ListReturn<Validators>)=>ReturnType,
    message : (result:ListReturn<Validators>)=>MessageType
) : Value<List.UnionOf<Allow<Validators>>, List.UnionOf<Expectation<Validators>>, MessageType, Validators, ListReturn<Validators>, ReturnType>;


export default function ValueAllParameters<
    Validators extends Validator[] = Validator[],
    ReturnType extends Validatable = Validatable,
>(
    validators : Validators,
    validation : (result:ListReturn<Validators>)=>ReturnType,
) : Value<List.UnionOf<Allow<Validators>>, List.UnionOf<Expectation<Validators>>, InferMessage<ListReturn<Validators>>, Validators, ListReturn<Validators>, ReturnType>;


export default function ValueAllParameters<
    BaseType = unknown,
    ValueType = unknown,
    Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
    ReturnType extends Validatable = Validatable,
>(
    validators : Validators,
    validation : (result:ListReturn<Validators>)=>ReturnType,

) : Value<BaseType, ValueType, InferMessage<ListReturn<Validators>>, Validators, ListReturn<Validators>, ReturnType>;

export default function ValueAllParameters<
    BaseType = unknown,
    ValueType = unknown,
    Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
    ReturnType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validators : Validators,
    validation : (result:ListReturn<Validators>)=>ReturnType,
    message : (result:ListReturn<Validators>)=>MessageType

) : Value<BaseType, ValueType, MessageType, Validators, ListReturn<Validators>, ReturnType>;

export default function ValueAllParameters<
    BaseType = unknown,
    ValueType = unknown,
    Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
    ReturnType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validators : Validators,
    validation : (result:ListReturn<Validators>)=>ReturnType,
    message : (result:ListReturn<Validators>)=>MessageType|InferMessage<ListReturn<Validators>> = Map

) : Value<BaseType, ValueType, MessageType, Validators, ListReturn<Validators>, ReturnType> {

    return ValueCallback(validators, ValidateValue, validation, message) as
        Value<BaseType, ValueType, MessageType, Validators, ListReturn<Validators>, ReturnType>;
}



