import Validator from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import ValidateValuePartial from './validatable/list/value-partial';
import ListReturn from './validatable/list/infer';
import ValueCallback, {ValueCallbackReturn as ValuePartialReturn} from './value-callback';
import Unions from '../unions';
import InferMessage from '../message/message/list/infer';
import Map from '../message/message/list/map';
import ValidatorsContainer from '../validator/validators/validators';
import Message from '@alirya/message/message';
import {Required} from 'utility-types';
import StrictOmit from '@alirya/object/strict-omit';
import Instance from '@alirya/validator/validatable/validatable';


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
    stop : boolean = false,
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
        Validatables extends Instance[],
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
