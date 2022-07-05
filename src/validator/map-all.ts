import Validator from '@alirya/validator/validator.js';
import Validatable from '@alirya/validatable/validatable.js';
import ValidateMap from './validatable/list/map.js';
import ListReturn from './validatable/list/infer.js';
import MapCallback from './map-callback.js';
import InferMessage from '../message/message/list/infer.js';
import InferList from './validatable/list/infer.js';
import Map from '../message/message/list/map.js';
import ValidatorsContainer from './validators/validators.js';
import Message from '@alirya/message/message.js';
import Unions from '../unions.js';
import ListStrict from './validatable/list/infer.js';
import StrictOmit from '@alirya/object/strict-omit.js';
import {Required} from 'utility-types';
import {MapCallbackReturn as MapAllReturn} from './map-callback.js';
import Instance from '@alirya/validator/validatable/validatable.js';

/**
 * more specific implementation of {@link MapCallback}
 *
 * Validate list of value with list of {@link Validator}, according to their indexes
 *
 * @param validators
 * list of {@link Validator} to be used against list of value
 *
 * @param validation
 * process all result from {@link Validator} list into {@link Validatable}
 *
 * @param message
 * process all result from {@link Validator} list into {@link Message} value
 */
export function MapAllParameters<
    Validators extends Validator[] = Validator[],
    ValidatableType extends Validatable = Validatable,
>(
    validators : Validators,
    validation : (result:ListReturn<Validators>)=>ValidatableType,
) : MapAllReturn<Validators, ListReturn<Validators>, InferMessage<InferList<Validators>>, ValidatableType>;

export function MapAllParameters<
    Validators extends Validator[] = Validator[],
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validators : Validators,
    validation : (result:ListReturn<Validators>)=>ValidatableType,
    message : (result:ListReturn<Validators>)=>MessageType
) : MapAllReturn<Validators, ListReturn<Validators>, MessageType, ValidatableType>;

export function MapAllParameters<
    Validators extends Validator[] = Validator[],
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validators : Validators,
    validation : (result:ListReturn<Validators>)=>ValidatableType,
    message : (result:ListReturn<Validators>)=>MessageType|InferMessage<InferList<Validators>> = Map
) : MapAllReturn<Validators, ListReturn<Validators>, MessageType, ValidatableType>  {

    return MapCallback.Parameters(validators, ValidateMap.Parameters, validation, message) as
        MapAllReturn<Validators, ListReturn<Validators>, MessageType, ValidatableType>;
}







/**
 * more specific implementation of {@link MapCallback}
 *
 * Validate list of value with list of {@link Validator}, according to their indexes
 *
 * @param validators
 * list of {@link Validator} to be used against list of value
 *
 * @param validation
 * process all result from {@link Validator} list into {@link Validatable}
 *
 * @param message
 * process all result from {@link Validator} list into {@link Message} value
 */


export type MapAllArgument<
    Validators extends Validator[] = Validator[],
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
> =
    ValidatorsContainer<Validators> &
    Partial<Message<(result:Unions<ListStrict<Validators>>)=>MessageType>> &
    {
        validation : (result:Unions<ListStrict<Validators>>)=>ValidatableType,
    };


export function MapAllParameter<
    Validators extends Validator[] = Validator[],
    ValidatableType extends Validatable = Validatable,
>(
    {
        validators,
        validation,
    } : StrictOmit<MapAllArgument<Validators, ValidatableType>, 'message'>
) : MapAllReturn<Validators, ListReturn<Validators>, InferMessage<InferList<Validators>>, ValidatableType>;

export function MapAllParameter<
    Validators extends Validator[] = Validator[],
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    {
        validators,
        validation,
        message,
    } : Required<MapAllArgument<Validators, ValidatableType>, 'message'>
) : MapAllReturn<Validators, ListReturn<Validators>, MessageType, ValidatableType>;

export function MapAllParameter<
    Validators extends Validator[] = Validator[],
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    {
        validators,
        validation,
        message,
    } : MapAllArgument<Validators, ValidatableType>
) : MapAllReturn<Validators, ListReturn<Validators>, MessageType, ValidatableType>  {

    return MapAllParameters(validators, validation, message as (result:ListReturn<Validators>)=>MessageType);
}

export {MapAllReturn};

namespace MapAll {
    export const Parameters = MapAllParameters;
    export const Parameter = MapAllParameter;
    export type Argument<
        Validators extends Validator[] = Validator[],
        ValidatableType extends Validatable = Validatable,
        MessageType = unknown,
    > = MapAllArgument<
        Validators,
        ValidatableType,
        MessageType
    >;
    export type Return<
        ValidatorsType extends Validator[],
        Validatables extends Instance[],
        MessageType,
        ValidatableType extends Validatable
    > = MapAllReturn<
        ValidatorsType,
        Validatables,
        MessageType,
        ValidatableType
    >;
}
export default MapAll;
