import Validator from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import ListReturn from './validatable/list/infer';
import Value from './value';
import InferMessage from '../message/message/list/infer';
import ValidatorsContainer from './validators/validators';
import Message from '@alirya/message/message';
import Unions from '../unions';
import StrictOmit from '@alirya/object/strict-omit';
import {Required} from 'utility-types';
import ValueAllParameters from './value-all-parameters';


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

export default function ValueAllParameter<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
    ReturnType extends Validatable = Validatable,
>(
    {
        validators,
        validation,
    } : StrictOmit<ValueAllArgument<BaseType, ValueType, Validators, ReturnType, any>, 'message'>
) : Value<BaseType, ValueType, InferMessage<ListReturn<Validators>>, Validators, ListReturn<Validators>, ReturnType>;

export default function ValueAllParameter<
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
) : Value<BaseType, ValueType, MessageType, Validators, ListReturn<Validators>, ReturnType>;

export default function ValueAllParameter<
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

) : Value<BaseType, ValueType, MessageType, Validators, ListReturn<Validators>, ReturnType> {

    return ValueAllParameters(validators, validation, message as (result:ListReturn<Validators>)=>MessageType);
}
