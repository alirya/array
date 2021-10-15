import ValidatableListCallback from "../validatable/list-callback";
/**
 * Base {@link Validator} for validating list of value with {@link Validator}
 *
 * @template ValueT
 * see {@link Validator}
 *
 * @template MessageT
 * see {@link Validator}
 *
 * @template ValidatorsT
 * to be used against list of value
 *
 * @template Validatables
 * result after processing {@template ValidatorsT} with {@template BaseT} or {@template ValueT}
 *
 * @template ValidatableT
 * final result after processing {@template Result}
 */
//
// export default class ValueCallback<
//     MessageType = unknown,
//     ValidatorType extends Validator = Validator,
//     Validatables extends Instance[] = Instance[],
//     ValidatableType extends Validatable  = Validatable
// > implements List<MessageType, ValidatorType, Validatables, ValidatableType> {
//
//     /**
//      * @param validator
//      *
//      * @param map
//      * process list of value and {@param validator} to list of {@link Instance}
//      *
//      * @param validation
//      * process result of {@param map} to single {@link Validatable}
//      *
//      * @param message
//      * process result of {@param map} to single {@link Message}
//      */
//     constructor(
//         public validator : ValidatorType,
//         public map : (value:BaseInfer<ValidatorType>[], validator:ValidatorType)=>Validatables,
//         public validation : (result:Validatables)=>ValidatableType,
//         public message : (result:Validatables)=>MessageType
//     ) {
//     }
//
//     validate<Argument extends TypeInfer<ValidatorType>[]>(value: Argument) :
//         Replace<ValidatableListCallbackInterface<Argument, ValidatorType, Validatables, MessageType, ValidatableType>, true>
//
//     validate<Argument extends BaseInfer<ValidatorType>[]>(value: Argument) :
//         Construct<BaseInfer<ValidatorType>[], Argument, TypeInfer<ValidatorType>[], ValidatableListCallbackInterface<TypeInfer<ValidatorType>[], ValidatorType, Validatables, MessageType, ValidatableType>>
//
//     validate<Argument extends BaseInfer<ValidatorType>[]>(value: Argument) {
//
//         return new ValidatableListCallback(value, this.validator, this.map, this.validation, this.message);
//     }
// }
export default function ValueCallback(validator, map, validation, message) {
    return function (value) {
        return new ValidatableListCallback(value, validator, map, validation, message);
    };
}
//# sourceMappingURL=list-callback.js.map