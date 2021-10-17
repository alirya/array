import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableListCallback from "../validatable/list-callback";
import ValidatableListCallbackInterface from "../validatable/list-callback";
import Construct from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Replace from "@dikac/t-validatable/boolean/replace";
import BaseInfer from "@dikac/t-validator/base/infer";
import TypeInfer from "@dikac/t-validator/expectation/infer";
import List from "./list";

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

export default function ListCallback<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    Validatables extends Instance[] = Instance[],
    ValidatableType extends Validatable  = Validatable
> (
    validator : ValidatorType,
    map : (value:BaseInfer<ValidatorType>[], validator:ValidatorType)=>Validatables,
    validation : (result:Validatables)=>ValidatableType,
    message : (result:Validatables)=>MessageType
) : List<MessageType, ValidatorType, Validatables, ValidatableType> {

    return function  (value) {

        return new ValidatableListCallback(value, validator, map, validation, message);

    } as List<MessageType, ValidatorType, Validatables, ValidatableType>
}

