import Validator from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import ValidatableListCallback from '../validatable/list-callback-parameters';
import Instance from '@alirya/validator/validatable/validatable';
import BaseInfer from '@alirya/validator/subject/allow';
import List from './list';

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

export default function ListCallbackParameters<
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

    } as List<MessageType, ValidatorType, Validatables, ValidatableType>;
}

