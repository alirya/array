import Validator from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import Instance from '@alirya/validator/validatable/validatable';
import Value from './value';
import ValidatorsContainer from './validators/validators';
import Message from '@alirya/message/message';
import ValueCallbackParameters from './value-callback-parameters';


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

export type ValueCallbackArgument<
    BaseType = unknown,
    ValueType = unknown,
    MessageType = unknown,
    Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
    Validatables extends Instance<BaseType|ValueType>[] = Instance<BaseType|ValueType>[],
    ValidatableType extends Validatable  = Validatable
> =
    ValidatorsContainer<Validators> &
    Message<(result:Validatables)=>MessageType> &
    {
        map : (value:BaseType, validators:Validators)=>Validatables;
        validation : (result:Validatables)=>ValidatableType;
    };

export default function ValueCallbackParameter<
    BaseType = unknown,
    ValueType = unknown,
    MessageType = unknown,
    Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
    Validatables extends Instance<BaseType|ValueType>[] = Instance<BaseType|ValueType>[],
    ValidatableType extends Validatable  = Validatable
> (
    {
        validators,
        map,
        validation,
        message,
    } : ValueCallbackArgument<BaseType, ValueType, MessageType, Validators, Validatables, ValidatableType>
) : Value<BaseType, ValueType, MessageType, Validators, Validatables, ValidatableType> {

    return ValueCallbackParameters(validators, map, validation, message);

}



