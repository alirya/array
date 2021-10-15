import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidateValue from "./validatable/list/value";
import ListReturn from "./validatable/list/infer";
import ValueCallback from "./value-callback";
import Value from "./value";

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
export default function ValueAll<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
    ReturnType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validators : Validators,
    validation : (result:ListReturn<Validators>)=>ReturnType,
    message : (result:ListReturn<Validators>)=>MessageType

) : Value<BaseType, ValueType, MessageType, Validators, ListReturn<Validators>, ReturnType> {

    return ValueCallback(validators, ValidateValue, validation, message);
}
