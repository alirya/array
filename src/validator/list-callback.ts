import Validator from '@alirya/validator/validator.js';
import Validatable from '@alirya/validatable/validatable.js';
import ValidatableListCallback from '../validatable/list-callback.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import BaseInfer from '@alirya/validator/subject/allow.js';
import SubjectInfer from '@alirya/validator/subject/subject.js';
import Message from '@alirya/message/message.js';
import ValidatorContainer from '@alirya/validator/validator/validator.js';
import ValidatorValidatable from '@alirya/validator/validatable/validatable.js';
import SimpleValidator from '@alirya/validator/simple.js';
import TypeInfer from '@alirya/validator/subject/expectation.js';
import ValidatableListInterface from '../validatable/list-callback.js';
import {ArrayParameters} from './array.js';
import Chain from '../../../validator/dist/chain.js';


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

export function ListCallbackParameters<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    Validatables extends Instance[] = Instance[],
    ValidatableType extends Validatable  = Validatable
> (
    validator : ValidatorType,
    map : (value:SubjectInfer<ValidatorType>[], validator:ValidatorType)=>Validatables,
    validation : (result:Validatables)=>ValidatableType,
    message : (result:Validatables)=>MessageType
) : ListCallbackReturn<MessageType, ValidatorType, Validatables, ValidatableType> {


    return Chain(ArrayParameters(), function (value) {

        return new ValidatableListCallback.Parameters(value, validator, map, validation, message);

    }) as ListCallbackReturn<MessageType, ValidatorType, Validatables, ValidatableType>;

    // const array = ArrayParameters();
    //
    // return function  (value) {
    //
    //     const validatable = array(value);
    //
    //     if(!validatable.valid) {
    //
    //         return validatable;
    //     }
    //
    //
    //     return new ValidatableListCallback.Parameters(value, validator, map, validation, message);
    //
    // } as ListCallbackReturn<MessageType, ValidatorType, Validatables, ValidatableType>;
}


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
export type ListCallbackArgument<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    Validatables extends Instance[] = Instance[],
    ValidatableType extends Validatable  = Validatable
> =
    ValidatorContainer<ValidatorType> &
    Message<(result:Validatables)=>MessageType> &
    {
        map : (value:BaseInfer<ValidatorType>[], validator:ValidatorType)=>Validatables;
        validation : (result:Validatables)=>ValidatableType;
    };

export function ListCallbackParameter<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    Validatables extends Instance[] = Instance[],
    ValidatableType extends Validatable  = Validatable
> (
    {
        validator,
        map,
        validation,
        message,
    } : ListCallbackArgument<MessageType, ValidatorType, Validatables, ValidatableType>
) : ListCallbackReturn<MessageType, ValidatorType, Validatables, ValidatableType> {

    return ListCallbackParameters(validator, map, validation, message);
}

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
export type ListCallbackReturn<
    MessageType,
    ValidatorType extends Validator,
    Validatables extends ValidatorValidatable[],
    ValidatableType extends Validatable
    > =
    SimpleValidator<
        BaseInfer<ValidatorType>[],
        TypeInfer<ValidatorType>[],
        MessageType,
        ValidatableListInterface.Type</*SubjectInfer<ValidatorType>[],*/ ValidatorType, Validatables, /*MessageType,*/ ValidatableType>
    >;



namespace ListCallback {
    export const Parameters = ListCallbackParameters;
    export const Parameter = ListCallbackParameter;
    export type Argument<
        MessageType = unknown,
        ValidatorType extends Validator = Validator,
        Validatables extends Instance[] = Instance[],
        ValidatableType extends Validatable  = Validatable
    > = ListCallbackArgument<
        MessageType,
        ValidatorType,
        Validatables,
        ValidatableType
    >;
    export type Return<
        MessageType,
        ValidatorType extends Validator,
        Validatables extends ValidatorValidatable[],
        ValidatableType extends Validatable
    > = ListCallbackReturn<
        MessageType,
        ValidatorType,
        Validatables,
        ValidatableType
    >;
}
export default ListCallback;
