import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableValue from "../validatable/value-callback-parameters";
import Instance from "@dikac/t-validator/validatable/validatable";
import Value from "./value";

// export default ValueCallback;
// namespace ValueCallback {
//
//     export const Parameter = ValueCallbackParameter;
//     export const Object = ValueCallbackObject;
// }

/**
 * Base {@link Validator} for validating value with list of {@link Validator}
 *
 * @template BaseType
 * see {@link Validator}
 *
 * @template ValueType
 * see {@link Validator}
 *
 * @template MessageType
 * see {@link Validator}
 *
 * @template ValidatorsType
 * list of {@link Validator} to be used against {@template BaseType} or {@template ValueType}
 *
 * @template Validatables
 * result after processing {@template ValidatorsType} with {@template BaseType} or {@template ValueType}
 *
 * @template ValidatableType
 * final result after processing {@template Result}
 */

export default function ValueCallbackParameters<
    BaseType = unknown,
    ValueType = unknown,
    MessageType = unknown,
    //Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
    Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
    Validatables extends Instance[] = Instance[],
    ValidatableType extends Validatable  = Validatable
> (
    validators : Validators,
    map : (value:BaseType|ValueType, validators:Validators)=>Validatables,
    validation : (result:Validatables)=>ValidatableType,
    message : (result:Validatables)=>MessageType
) : Value<BaseType, ValueType, MessageType, Validators, Validatables, ValidatableType> {

    return function(value) {

        return new ValidatableValue(value, validators, map, validation, message);

    } as Value<BaseType, ValueType, MessageType, Validators, Validatables, ValidatableType>
}
//
// export type ValueCallbackArgument<
//     BaseType = unknown,
//     ValueType extends BaseType = BaseType,
//     MessageType = unknown,
//     Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
//     Validatables extends Instance[] = Instance[],
//     ValidatableType extends Validatable  = Validatable
// > =
//     ValidatorsContainer<Validators> &
//     Message<(result:Union<ListReturn<Validators>>)=>MessageType> &
//     {
//         map : (value:BaseType, validators:Validators)=>Validatables;
//         validation : (result:Validatables)=>ValidatableType;
//     }
//
// export function ValueCallbackObject<
//     BaseType = unknown,
//     ValueType extends BaseType = BaseType,
//     MessageType = unknown,
//     Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
//     Validatables extends Instance[] = Instance[],
//     ValidatableType extends Validatable  = Validatable
// > (
//     //validators : Validators,
//     //map : (value:BaseType, validators:Validators)=>Validatables,
//     //validation : (result:Validatables)=>ValidatableType,
//     //message : (result:Validatables)=>MessageType,
//     {
//         validators,
//         map,
//         validation,
//         message,
//     } : ValueCallbackArgument<BaseType, ValueType, MessageType, Validators, Validatables, ValidatableType>
// ) : Value<BaseType, ValueType, MessageType, Validators, Validatables, ValidatableType> {
//
//     return ValueCallbackParameter(validators, map, validation, message as (result:Validatables)=>MessageType);
//
// }



