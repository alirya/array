import Validator from '@alirya/validator/validator.js';
import Validatable from '@alirya/validatable/validatable.js';
import InferReturn from '@alirya/validator/validatable/infer-static.js';
import ListCallback from './list-callback.js';
import ValidateMap from './validatable/list/list.js';
import InferMessage from '../message/message/list/infer.js';
import Map from '../message/message/list/map.js';
import ValidatorContainer from '@alirya/validator/validator/validator.js';
import Message from '@alirya/message/message.js';
import StrictOmit from '@alirya/object/strict-omit.js';
import {ListCallbackReturn as ListAllReturn} from './list-callback.js';
import ValidatorValidatable from '@alirya/validator/validatable/validatable.js';

/**
 * more specific implementation of {@link ListCallback}
 *
 * Validate all list of value with {@link Validator}
 *
 * @param validator
 * to be used against list of value
 *
 * @param validation
 * process all result from {@link Validator} list into {@link Validatable}
 *
 * @param message
 * process all result from {@link Validator} list into {@link Message} value
 */
export function ListAllParameters<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
    validator : ValidatorType,
    validation : (result:InferReturn<ValidatorType>[])=>ValidatableType,

) : ListAllReturn<InferMessage<InferReturn<ValidatorType>[]>, ValidatorType, InferReturn<ValidatorType>[], ValidatableType>;

export function ListAllParameters<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
    validator : ValidatorType,
    validation : (result:InferReturn<ValidatorType>[])=>ValidatableType,
    message : (result:InferReturn<ValidatorType>[])=>MessageType

) : ListAllReturn<MessageType, ValidatorType, InferReturn<ValidatorType>[], ValidatableType>;

export function ListAllParameters<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
    validator : ValidatorType,
    validation : (result:InferReturn<ValidatorType>[])=>ValidatableType,
    message : (result:InferReturn<ValidatorType>[])=>MessageType|InferMessage<InferReturn<ValidatorType>[]> = Map

) : ListAllReturn<MessageType, ValidatorType, InferReturn<ValidatorType>[], ValidatableType> {

    return ListCallback.Parameters(
        validator,
        ValidateMap.Parameters,
        validation,
        message
    ) as ListAllReturn<MessageType, ValidatorType, InferReturn<ValidatorType>[], ValidatableType>;
}




export type ListAllArgument<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
> = ValidatorContainer<ValidatorType> &
    Partial<Message<(result:InferReturn<ValidatorType>[])=>MessageType>> & {
    validation : (result:InferReturn<ValidatorType>[])=>ValidatableType
};
/**
 * more specific implementation of {@link ListCallback}
 *
 * Validate all list of value with {@link Validator}
 *
 * @param validator
 * to be used against list of value
 *
 * @param validation
 * process all result from {@link Validator} list into {@link Validatable}
 *
 * @param message
 * process all result from {@link Validator} list into {@link Message} value
 */
export function ListAllParameter<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
    {
        validator,
        validation,
    } : StrictOmit<ListAllArgument<unknown, ValidatorType, ValidatableType>, 'message'>
) : ListAllReturn<InferMessage<InferReturn<ValidatorType>[]>, ValidatorType, InferReturn<ValidatorType>[], ValidatableType>;
export function ListAllParameter<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
    {
        validator,
        validation,
        message
    } : Required<ListAllArgument<unknown, ValidatorType, ValidatableType>>

) : ListAllReturn<MessageType, ValidatorType, InferReturn<ValidatorType>[], ValidatableType>;

export function ListAllParameter<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
    {
        validator,
        validation,
        message = Map,
    } : ListAllArgument<MessageType|InferMessage<InferReturn<ValidatorType>[]>, ValidatorType, ValidatableType>
) : ListAllReturn<MessageType|InferMessage<InferReturn<ValidatorType>[]>, ValidatorType, InferReturn<ValidatorType>[], ValidatableType> {

    return ListAllParameters(
        validator,
        validation,
        message
    ) ;
}


export {ListAllReturn};

namespace ListAll {
    export const Parameters = ListAllParameters;
    export const Parameter = ListAllParameter;
    export type Argument<
        MessageType = unknown,
        ValidatorType extends Validator = Validator,
        ValidatableType extends Validatable  = Validatable
    > = ListAllArgument<
        MessageType,
        ValidatorType,
        ValidatableType
    >;
    export type Return<
        MessageType,
        ValidatorType extends Validator,
        Validatables extends ValidatorValidatable[],
        ValidatableType extends Validatable
    > = ListAllReturn<
        MessageType,
        ValidatorType,
        Validatables,
        ValidatableType
    >;
}
export default ListAll;
