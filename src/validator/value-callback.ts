import Validator from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import ValidatableValue from '../validatable/value-callback';
import Instance from '@alirya/validator/validatable/validatable';
import ValidatorsContainer from './validators/validators';
import Message from '@alirya/message/message';
import SimpleValidator from '@alirya/validator/simple';
import ValidatableValueInterface from '../validatable/value-callback';

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

export function ValueCallbackParameters<
    BaseType = unknown,
    ValueType = unknown,
    MessageType = unknown,
    Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
    Validatables extends Instance[] = Instance[],
    ValidatableType extends Validatable  = Validatable
> (
    validators : Validators,
    map : (value:BaseType|ValueType, validators:Validators)=>Validatables,
    validation : (result:Validatables)=>ValidatableType,
    message : (result:Validatables)=>MessageType
) : ValueCallbackReturn<BaseType, ValueType, MessageType, Validators, Validatables, ValidatableType> {

    return function(value) {

        return new ValidatableValue.Parameters(value, validators, map, validation, message);

    } as ValueCallbackReturn<BaseType, ValueType, MessageType, Validators, Validatables, ValidatableType>;
}



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

export function ValueCallbackParameter<
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
) : ValueCallbackReturn<BaseType, ValueType, MessageType, Validators, Validatables, ValidatableType> {

    return ValueCallbackParameters(validators, map, validation, message) as ValueCallbackReturn<BaseType, ValueType, MessageType, Validators, Validatables, ValidatableType>;

}

export type ValueCallbackReturn<
    Base,
    ValueType,
    MessageType,
    ValidatorsType extends Validator<Base, ValueType>[],
    Validatables extends Instance[],
    ValidatableType extends Validatable
    > =
    SimpleValidator<
        Base,
        ValueType,
        ValidatableValueInterface.Type<Base, ValidatorsType, Validatables, MessageType, ValidatableType>
        >;


namespace ValueCallback {
    export const Parameters = ValueCallbackParameters;
    export const Parameter = ValueCallbackParameter;
    export type Argument<
        BaseType = unknown,
        ValueType = unknown,
        MessageType = unknown,
        Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
        Validatables extends Instance<BaseType|ValueType>[] = Instance<BaseType|ValueType>[],
        ValidatableType extends Validatable  = Validatable
    > = ValueCallbackArgument<BaseType, ValueType, MessageType, Validators, Validatables, ValidatableType>;

    export type Return<
        Base,
        ValueType,
        MessageType,
        ValidatorsType extends Validator<Base, ValueType>[],
        Validatables extends Instance[],
        ValidatableType extends Validatable
    > = ValueCallbackReturn<
        Base,
        ValueType,
        MessageType,
        ValidatorsType,
        Validatables,
        ValidatableType
    >;
}
export default ValueCallback;
