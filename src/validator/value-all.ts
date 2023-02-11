import Validator from '@alirya/validator/validator.js';
import Validatable from '@alirya/validatable/validatable.js';
import ValidateValue from './validatable/list/value.js';
import ListReturn from './validatable/list/infer.js';
import ValueCallback from './value-callback.js';
import InferMessage from '../message/message/list/infer.js';
import Map from '../message/message/list/map.js';
import {List} from 'ts-toolbelt';
import Allow from './subject/list/allow.js';
import Expectation from './subject/list/expectation.js';
import ValidatorsContainer from './validators/validators.js';
import Message from '@alirya/message/message.js';
import Unions from '../unions.js';
import StrictOmit from '@alirya/object/strict-omit.js';
import {Required} from 'utility-types';
import Instance from '@alirya/validator/validatable/validatable.js';
import {ValueCallbackValidator as ValueAllReturn} from './value-callback.js';

/**
 * more specific implementation of {@link ValueCallback}
 *
 * Validate value with all list of {@link Validator}
 *
 * @param validators
 * list of {@link Validator} to be used against value
 *
 * @param validation
 * combined all result from {@link Validator} list into {@link Validatable}
 *
 * @param message
 * combined all result from {@link Validator} list into {@link Message} value
 */
export function ValueAllParameters<
    BaseType = unknown,
    ValueType = unknown,
    Validators extends Validator<BaseType,ValueType>[] = Validator<BaseType,ValueType>[],
    ReturnType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validators : Validators,
    validation : (result:ListReturn<Validators>)=>ReturnType,
    message : (result:ListReturn<Validators>)=>MessageType
) : ValueAllReturn<BaseType, ValueType, MessageType, Validators, ListReturn<Validators>, ReturnType>;


export function ValueAllParameters<
    BaseType = unknown,
    ValueType = unknown,
    Validators extends Validator<BaseType,ValueType>[] = Validator<BaseType,ValueType>[],
    ReturnType extends Validatable = Validatable,
>(
    validators : Validators,
    validation : (result:ListReturn<Validators>)=>ReturnType,
) : ValueAllReturn<BaseType, ValueType, InferMessage<ListReturn<Validators>>, Validators, ListReturn<Validators>, ReturnType>;


export function ValueAllParameters<
    BaseType = unknown,
    ValueType = unknown,
    Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
    ReturnType extends Validatable = Validatable,
>(
    validators : Validators,
    validation : (result:ListReturn<Validators>)=>ReturnType,

) : ValueAllReturn<BaseType, ValueType, InferMessage<ListReturn<Validators>>, Validators, ListReturn<Validators>, ReturnType>;

export function ValueAllParameters<
    BaseType = unknown,
    ValueType = unknown,
    Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
    ReturnType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validators : Validators,
    validation : (result:ListReturn<Validators>)=>ReturnType,
    message : (result:ListReturn<Validators>)=>MessageType

) : ValueAllReturn<BaseType, ValueType, MessageType, Validators, ListReturn<Validators>, ReturnType>;

export function ValueAllParameters<
    BaseType = unknown,
    ValueType = unknown,
    Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
    ReturnType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validators : Validators,
    validation : (result:ListReturn<Validators>)=>ReturnType,
    message : (result:ListReturn<Validators>)=>MessageType|InferMessage<ListReturn<Validators>> = Map

) : ValueAllReturn<BaseType, ValueType, MessageType, Validators, ListReturn<Validators>, ReturnType> {

    return ValueCallback.Parameters(validators, ValidateValue.Parameters, validation, message) as
        ValueAllReturn<BaseType, ValueType, MessageType, Validators, ListReturn<Validators>, ReturnType>;
}






/**
 * more specific implementation of {@link ValueCallback}
 *
 * Validate value with all list of {@link Validator}
 *
 * @param validators
 * list of {@link Validator} to be used against value
 *
 * @param validation
 * combined all result from {@link Validator} list into {@link Validatable}
 *
 * @param message
 * combined all result from {@link Validator} list into {@link Message} value
 */

export type ValueAllArgument<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
    ReturnType extends Validatable = Validatable,
    MessageType = unknown,
> =
    ValidatorsContainer<Validators> &
    Partial<Message<(result:Unions<ListReturn<Validators>>)=>MessageType>> &
    {
        validation : (result:Unions<ListReturn<Validators>>)=>ReturnType,
    };

/**
 * object implementation
 *
 * @param validators
 * @param validation
 * @constructor
 */

export function ValueAllParameter<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
    ReturnType extends Validatable = Validatable,
>(
    {
        validators,
        validation,
    } : StrictOmit<ValueAllArgument<BaseType, ValueType, Validators, ReturnType, any>, 'message'>
) : ValueAllReturn<BaseType, ValueType, InferMessage<ListReturn<Validators>>, Validators, ListReturn<Validators>, ReturnType>;

export function ValueAllParameter<
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
    } : Required<ValueAllArgument<BaseType, ValueType, Validators, ReturnType, MessageType>, 'message'>
) : ValueAllReturn<BaseType, ValueType, MessageType, Validators, ListReturn<Validators>, ReturnType>;

export function ValueAllParameter<
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
    } : ValueAllArgument<BaseType, ValueType, Validators, ReturnType, MessageType>

) : ValueAllReturn<BaseType, ValueType, MessageType, Validators, ListReturn<Validators>, ReturnType> {

    return ValueAllParameters(validators, validation, message as (result:ListReturn<Validators>)=>MessageType);
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
export {ValueAllReturn};
namespace ValueAll {
    export const Parameters = ValueAllParameters;
    export const Parameter = ValueAllParameter;
    export type Argument<
        BaseType = unknown,
        ValueType extends BaseType = BaseType,
        Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
        ReturnType extends Validatable = Validatable,
        MessageType = unknown,
    > = ValueAllArgument<
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
        Validatables extends Instance<Base, ValueType>[],
        ValidatableType extends Validatable
    > = ValueAllReturn<
        Base,
        ValueType,
        MessageType,
        ValidatorsType,
        Validatables,
        ValidatableType
    >;
}
export default ValueAll;
