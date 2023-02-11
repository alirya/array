import ValidatorT from '@alirya/validator/validator.js';
import Validatable from '@alirya/validatable/validatable.js';
import ValidatableValue from '../validatable/value-callback.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import ValidatorsContainer from './validators/validators.js';
import Message from '@alirya/message/message.js';
import SimpleValidator from '@alirya/validator/simple.js';
import ValidatableValueInterface from '../validatable/value-callback.js';

/**
 * Base {@link ValidatorT} for validating value with list of {@link ValidatorT}
 *
 * @template BaseType
 * see {@link ValidatorT}
 *
 * @template ValueType
 * see {@link ValidatorT}
 *
 * @template MessageType
 * see {@link ValidatorT}
 *
 * @template ValidatorsType
 * list of {@link ValidatorT} to be used against {@template BaseType} or {@template ValueType}
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
    Validators extends ValidatorT<BaseType, ValueType>[] = ValidatorT<BaseType, ValueType>[],
    Validatables extends Instance<BaseType|ValueType>[] = Instance<BaseType|ValueType>[],
    ValidatableType extends Validatable  = Validatable
> (
    validators : Validators,
    map : (value:BaseType|ValueType, validators:Validators)=>Validatables,
    validation : (result:Validatables)=>ValidatableType,
    message : (result:Validatables)=>MessageType
) : ValueCallbackValidator<BaseType, ValueType, MessageType, Validators, Validatables, ValidatableType> {

    return function(value) {

        return new ValidatableValue.Parameters(value, validators, map, validation, message);

    } as ValueCallbackValidator<BaseType, ValueType, MessageType, Validators, Validatables, ValidatableType>;
}



/**
 * Base {@link ValidatorT} for validating value with list of {@link ValidatorT}
 *
 * @template BaseType
 * see {@link ValidatorT}
 *
 * @template ValueType
 * see {@link ValidatorT}
 *
 * @template MessageType
 * see {@link ValidatorT}
 *
 * @template ValidatorsType
 * list of {@link ValidatorT} to be used against {@template BaseType} or {@template ValueType}
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
    Validators extends ValidatorT<BaseType, ValueType>[] = ValidatorT<BaseType, ValueType>[],
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
    Validators extends ValidatorT<BaseType, ValueType>[] = ValidatorT<BaseType, ValueType>[],
    Validatables extends Instance<BaseType|ValueType>[] = Instance<BaseType|ValueType>[],
    ValidatableType extends Validatable  = Validatable
> (
    {
        validators,
        map,
        validation,
        message,
    } : ValueCallbackArgument<BaseType, ValueType, MessageType, Validators, Validatables, ValidatableType>
) : ValueCallbackValidator<BaseType, ValueType, MessageType, Validators, Validatables, ValidatableType> {

    return ValueCallbackParameters<BaseType, ValueType, MessageType, Validators, Validatables, ValidatableType>(
        validators, map, validation, message
    );

}

export type ValueCallbackValidator<
    Base,
    ValueType,
    MessageType,
    ValidatorsType extends ValidatorT<Base, ValueType>[],
    Validatables extends Instance<Base|ValueType>[],
    ValidatableType extends Validatable
    > =
    SimpleValidator<
        Base,
        ValueType,
        MessageType,
        ValidatableValueInterface.Context</*Base, */ValidatorsType, Validatables, /*MessageType, */ValidatableType>
        >;


namespace ValueCallback {
    export const Parameters = ValueCallbackParameters;
    export const Parameter = ValueCallbackParameter;
    export type Argument<
        BaseType = unknown,
        ValueType = unknown,
        MessageType = unknown,
        Validators extends ValidatorT<BaseType, ValueType>[] = ValidatorT<BaseType, ValueType>[],
        Validatables extends Instance<BaseType|ValueType>[] = Instance<BaseType|ValueType>[],
        ValidatableType extends Validatable  = Validatable
    > = ValueCallbackArgument<BaseType, ValueType, MessageType, Validators, Validatables, ValidatableType>;

    export type Validator<
        Base,
        ValueType,
        MessageType,
        ValidatorsType extends ValidatorT<Base, ValueType>[],
        Validatables extends Instance<Base|ValueType>[],
        ValidatableType extends Validatable
    > = ValueCallbackValidator<
        Base,
        ValueType,
        MessageType,
        ValidatorsType,
        Validatables,
        ValidatableType
    >;
}
export default ValueCallback;
