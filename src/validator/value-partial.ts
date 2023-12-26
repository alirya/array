import Validator from '@axiona/validator/validator.js';
import Validatable from '@axiona/validatable/validatable.js';
import ValidateValuePartial from './validatable/list/value-partial.js';
import ListReturn from './validatable/list/infer.js';
import ValueCallback, {ValueCallbackValidator as ValuePartialReturn} from './value-callback.js';
import Unions from '../unions.js';
import InferMessage from '../message/message/list/infer.js';
import Map from '../message/message/list/map.js';
import ValidatorsContainer from '../validator/validators/validators.js';
import Message from '@axiona/message/message.js';
import {Required} from 'utility-types';
import StrictOmit from '@axiona/object/strict-omit.js';
import Instance from '@axiona/validator/validatable/validatable.js';


/**
 * more specific implementation of {@link ValueCallback}
 *
 * Validate value with list of {@link Validator}
 * stop on encounter that match {@param stop} result from {@link Validator}
 *
 * @param validators
 * list of {@link Validator} to be used against value
 *
 * @param validation
 * combined partial result from {@link Validator} list into {@link Validatable}
 *
 * @param message
 * combined partial result from {@link Validator} list into {@link Message} value
 *
 * @param stop
 * stop validation operation condition
 */
export function ValuePartialParameters<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
    ReturnType extends Validatable = Validatable,
>(
    validators : Validators,
    validation : (result:Unions<ListReturn<Validators>>)=>ReturnType,
) : ValuePartialReturn<BaseType, ValueType, Unions<InferMessage<ListReturn<Validators>>>, Validators, Unions<ListReturn<Validators>>, ReturnType>;

export function ValuePartialParameters<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
    ReturnType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validators : Validators,
    validation : (result:Unions<ListReturn<Validators>>)=>ReturnType,
    message : (result:Unions<ListReturn<Validators>>)=>MessageType,
    stop ?: boolean,
) : ValuePartialReturn<BaseType, ValueType, MessageType, Validators, Unions<ListReturn<Validators>>, ReturnType>;


export function ValuePartialParameters<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
    ReturnType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validators : Validators,
    validation : (result:Unions<ListReturn<Validators>>)=>ReturnType,
    message : (result:Unions<ListReturn<Validators>>)=>MessageType|Unions<InferMessage<ListReturn<Validators>>> = Map,
    stop  = false,
) : ValuePartialReturn<BaseType, ValueType, MessageType|Unions<InferMessage<ListReturn<Validators>>>, Validators, Unions<ListReturn<Validators>>, ReturnType> {


    return ValueCallback.Parameters(
        validators,
        (value, validators)=>ValidateValuePartial.Parameters(value, validators, stop),
        validation,
        message
    ) as ValuePartialReturn<BaseType, ValueType, MessageType, Validators, Unions<ListReturn<Validators>>, ReturnType>;
}



/**
 * more specific implementation of {@link ValueCallback}
 *
 * Validate value with list of {@link Validator}
 * stop on encounter that match {@param stop} result from {@link Validator}
 *
 * @param validators
 * list of {@link Validator} to be used against value
 *
 * @param validation
 * combined partial result from {@link Validator} list into {@link Validatable}
 *
 * @param message
 * combined partial result from {@link Validator} list into {@link Message} value
 *
 * @param stop
 * stop validation operation condition
 */


export type ValuePartialArgument<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
    ReturnType extends Validatable = Validatable,
    MessageType = unknown,
> = ValidatorsContainer<Validators> &
    Partial<Message<(result:Unions<ListReturn<Validators>>)=>MessageType>> &
    {
        validation : (result:Unions<ListReturn<Validators>>)=>ReturnType,
        stop ?: boolean
    };

/**
 * object destructure implementation
 *
 * @param validators
 * @param validation
 * @param stop
 */
export function ValuePartialParameter<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
    ReturnType extends Validatable = Validatable,
    MessageType = unknown,
>(
    {
        validators,
        validation,
        stop,
    } : StrictOmit<ValuePartialArgument<BaseType, ValueType, Validators, ReturnType, MessageType>, 'message'>
) : ValuePartialReturn<BaseType, ValueType, Unions<InferMessage<ListReturn<Validators>>>, Validators, Unions<ListReturn<Validators>>, ReturnType> ;

/**
 * object destructure implementation
 *
 * @param validators
 * @param validation
 * @param message
 * @param stop
 */
export function ValuePartialParameter<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
    ReturnType extends Validatable = Validatable,
    MessageType = unknown,
>(
    {
        validators,
        validation,
        message,
        stop,
    } : Required<ValuePartialArgument<BaseType, ValueType, Validators, ReturnType, MessageType>, 'message'>
) : ValuePartialReturn<BaseType, ValueType, MessageType, Validators, Unions<ListReturn<Validators>>, ReturnType> ;

export function ValuePartialParameter<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
    ReturnType extends Validatable = Validatable,
    MessageType = unknown,
>(
    {
        validators,
        validation,
        message,
        stop,
    } : ValuePartialArgument<BaseType, ValueType, Validators, ReturnType, MessageType>
) : ValuePartialReturn<BaseType, ValueType, MessageType, Validators, Unions<ListReturn<Validators>>, ReturnType> {

    return ValuePartialParameters(validators, validation, message as (result:Unions<ListReturn<Validators>>)=>MessageType, stop);
}

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
export {ValuePartialReturn};

namespace ValuePartial {
    export const Parameters = ValuePartialParameters;
    export const Parameter = ValuePartialParameter;
    export type Argument<
        BaseType = unknown,
        ValueType extends BaseType = BaseType,
        Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
        ReturnType extends Validatable = Validatable,
        MessageType = unknown,
    > = ValuePartialArgument<
        BaseType,
        ValueType,
        Validators,
        ReturnType,
        MessageType
    >;
    export type Return<
        Base,
        ValueType,
        MessageType,
        ValidatorsType extends Validator<Base, ValueType>[],
        Validatables extends Instance<Base|ValueType>[],
        ValidatableType extends Validatable
    > = ValuePartialReturn<
        Base,
        ValueType,
        MessageType,
        ValidatorsType,
        Validatables,
        ValidatableType
    >;
}
export default ValuePartial;
