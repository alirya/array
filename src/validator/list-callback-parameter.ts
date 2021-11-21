import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/dynamic";
import BaseInfer from "@dikac/t-validator/base/infer";
import List from "./list";
import Message from "@dikac/t-message/message";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import ListCallbackParameters from "./list-callback-parameters";

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
export type ListCallbackArgument<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    Validatables extends Instance[] = Instance[],
    ValidatableType extends Validatable  = Validatable
> =
    ValidatorContainer<ValidatorType> &
    Message<(result:Validatables)=>MessageType> &
    {
        map : (value:BaseInfer<ValidatorType>[], validator:ValidatorType)=>Validatables;
        validation : (result:Validatables)=>ValidatableType;
    }

export function ListCallbackParameter<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    Validatables extends Instance[] = Instance[],
    ValidatableType extends Validatable  = Validatable
> (
    // validator : ValidatorType,
    // map : (value:BaseInfer<ValidatorType>[], validator:ValidatorType)=>Validatables,
    // validation : (result:Validatables)=>ValidatableType,
    // message : (result:Validatables)=>MessageType,
    {
        validator,
        map,
        validation,
        message,
    } : ListCallbackArgument<MessageType, ValidatorType, Validatables, ValidatableType>
) : List<MessageType, ValidatorType, Validatables, ValidatableType> {

    return ListCallbackParameters(validator, map, validation, message);
}

