import Validator from '@alirya/validator/validator';
import SimpleValidator from '@alirya/validator/simple';
import Validatable from '@alirya/validatable/validatable';
import ValidatableValueInterface from '../validatable/value';
import Instance from '@alirya/validator/validatable/validatable';

/**
 * Base {@link Validator} for validating value with list of {@link Validator}
 *
 * @template BaseT
 * see {@link Validator}
 *
 * @template ValueT
 * see {@link Validator}
 *
 * @template MessageT
 * see {@link Validator}
 *
 * @template ValidatorsT
 * list of {@link Validator} to be used against {@template BaseT} or {@template ValueT}
 *
 * @template Validatables
 * result after processing {@template ValidatorsT} with {@template BaseT} or {@template ValueT}
 *
 * @template ValidatableT
 * final result after processing {@template Result}
 */
type Value<
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
        ValidatableValueInterface<Base, ValidatorsType, Validatables, MessageType, ValidatableType>
    >;

export default Value;
