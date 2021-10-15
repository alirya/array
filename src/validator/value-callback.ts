import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableValue from "../validatable/value-callback";
import ValidatableValueInterface from "../validatable/value";
import Construct from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Replace from "@dikac/t-validatable/boolean/replace";
import Value from "./value";

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
//
// export default class ValueCallback<
//     BaseType = unknown,
//     ValueType extends BaseType = BaseType,
//     MessageType = unknown,
//     Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
//     Validatables extends Instance[] = Instance[],
//     ValidatableType extends Validatable  = Validatable
// > implements Value<BaseType, ValueType, MessageType, Validators, Validatables, ValidatableType> {
//
//     /**
//      * @param validators
//      * list of {@link Validator}
//      *
//      * @param map
//      * process value and {@param validators} to list of {@link Instance}
//      *
//      * @param validation
//      * process result of {@param map} to single {@link Validatable}
//      *
//      * @param message
//      * process result of {@param map} to single {@link Message}
//      */
//     constructor(
//         public validators : Validators,
//         public map : (value:BaseType, validators:Validators)=>Validatables,
//         public validation : (result:Validatables)=>ValidatableType,
//         public message : (result:Validatables)=>MessageType
//     ) {
//     }
//
//     validate<Argument extends ValueType>(value: Argument) : Replace<ValidatableValueInterface<Argument, Validators, Validatables, MessageType, ValidatableType>, true>
//     validate<Argument extends BaseType>(value: Argument) : Construct<BaseType, Argument, ValueType, ValidatableValueInterface<Argument, Validators, Validatables, MessageType, ValidatableType>>
//     validate<Argument extends BaseType>(value: Argument) {
//
//         return new ValidatableValue(value, this.validators, this.map, this.validation, this.message) as
//             Replace<ValidatableValueInterface<BaseType, Validators, Validatables, MessageType, ValidatableType>, true> |
//             Construct<BaseType, Argument, ValueType, ValidatableValueInterface<BaseType, Validators, Validatables, MessageType, ValidatableType>>;
//     }
// }

export default function ValueCallback<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    MessageType = unknown,
    Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
    Validatables extends Instance[] = Instance[],
    ValidatableType extends Validatable  = Validatable
> (
    validators : Validators,
    map : (value:BaseType, validators:Validators)=>Validatables,
    validation : (result:Validatables)=>ValidatableType,
    message : (result:Validatables)=>MessageType
) : Value<BaseType, ValueType, MessageType, Validators, Validatables, ValidatableType>  {

    return function<Type extends ValueType, Argument extends BaseType>(value : Type|Argument) {

        return new ValidatableValue(value, validators, map, validation, message);

    } as Value<BaseType, ValueType, MessageType, Validators, Validatables, ValidatableType>
}



