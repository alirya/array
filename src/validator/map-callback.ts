import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableMap from "../validatable/map-callback";
import ValidatableMapInterface from "../validatable/map";
import BaseList from "./base/list/infer";
import TypeList from "./type/list/infer";
import Construct from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Map from "./map";
import Replace from "@dikac/t-validatable/boolean/replace";

/**
 * Base {@link Validator} for validating list of value with list of  {@link Validator}
 *
 * @template MessageT
 * see {@link Validator}
 *
 *
 * @template ValidatorsT
 * list of {@link Validator} to be used against list of value
 *
 * @template ValidatorsT
 * list of {@link Validator} result
 *
 * @template MessageT
 * message type for {@link Message} value
 *
 * @template ValidatableT
 * result {@link Validatable} from {@template Validatables}
 */
//
// export default class MapCallback<
//     Validators extends Validator[] = Validator[],
//     Validatables extends Instance[] = Instance[],
//     MessageType = unknown,
//     ValidatableType extends Validatable = Validatable
// > implements Map<Validators,     Validatables, MessageType, ValidatableType> {
//
//     /**
//      * @param validators
//      * list of {@link Validator}
//      *
//      * @param map
//      * process list of value and {@param validators} to list of {@link Instance}
//      *
//      * @param validation
//      * process result of {@param map} to single {@link Validatable}
//      *
//      * @param message
//      * process result of {@param map} to single {@link Message}
//      */
//     constructor(
//         public validators : Validators,
//         public map : (value:BaseList<Validators>, validators:Validators)=>Validatables,
//         public validation : (result:Validatables)=>ValidatableType,
//         public message : (result:Validatables)=>MessageType
//     ) {
//     }
//
//     validate<Argument extends TypeList<Validators>>(
//         value: Argument
//     ) : Replace<ValidatableMapInterface<Validators, Validatables, MessageType, ValidatableType, Argument>, true>
//
//     validate<Argument extends BaseList<Validators>>(
//         value: Argument
//     ) : Construct<BaseList<Validators>, Argument, TypeList<Validators>, ValidatableMapInterface<Validators, Validatables, MessageType, ValidatableType, Argument>>
//
//     validate<Argument extends BaseList<Validators>>(
//         value: Argument
//     ) {
//
//         return new ValidatableMap(value, this.validators, this.map, this.validation, this.message) as
//             Replace<ValidatableMapInterface<Validators, Validatables, MessageType, ValidatableType, Argument>, true> |
//             Construct<BaseList<Validators>, Argument, TypeList<Validators>, ValidatableMapInterface<Validators, Validatables, MessageType, ValidatableType, Argument>>;
//
//     }
// }


export default function MapCallback<
    Validators extends Validator[] = Validator[],
    Validatables extends Instance[] = Instance[],
    MessageType = unknown,
    ValidatableType extends Validatable = Validatable
>(
    validators : Validators,
    map : (value:BaseList<Validators>, validators:Validators)=>Validatables,
    validation : (result:Validatables)=>ValidatableType,
    message : (result:Validatables)=>MessageType
) : Map<Validators, Validatables, MessageType, ValidatableType> {

    return function<Type extends TypeList<Validators>, Argument extends BaseList<Validators>> (value : Type|Argument) {

        return new ValidatableMap(value, validators, map, validation, message) as
            Replace<ValidatableMapInterface<Validators, Validatables, MessageType, ValidatableType, Argument>, true> |
            Construct<BaseList<Validators>, Argument, TypeList<Validators>, ValidatableMapInterface<Validators, Validatables, MessageType, ValidatableType, Argument>>;

    } as Map<Validators, Validatables, MessageType, ValidatableType>
}


