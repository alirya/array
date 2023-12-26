import Validator from '@axiona/validator/validator.js';
import Validatable from '@axiona/validatable/validatable.js';
import ValidateMap from './validatable/list/map-partial.js';
import MapCallback from './map-callback.js';
import {MapCallbackReturn as MapPartialReturn} from './map-callback.js';
import ListStrict from './validatable/list/infer.js';
import Unions from '../unions.js';
import InferMessage from '../message/message/list/infer.js';
import Map from '../message/message/list/map.js';
import ValidatorsContainer from './validators/validators.js';
import Message from '@axiona/message/message.js';
import StrictOmit from '@axiona/object/strict-omit.js';
import {Required} from 'utility-types';
import Instance from '@axiona/validator/validatable/validatable.js';


/**
 * more specific implementation of {@link MapCallback}
 *
 * Validate list of value with list of {@link Validator}, according to their indexes
 * stop on encounter invalid result from {@link Validator}
 *
 * @param validators
 * list of {@link Validator} to be used against list of value
 *
 * @param validation
 * process partial result from {@link Validator} list into {@link Validatable}
 *
 * @param message
 * process partial result from {@link Validator} list into {@link Message} value
 *
 * @param stop
 * stop validation operation condition
 */

export function MapPartialParameters<
    Validators extends Validator[] = Validator[],
    ValidatableType extends Validatable = Validatable,
>(
    validators : Validators,
    validation : (result:Unions<ListStrict<Validators>>)=>ValidatableType,
) : MapPartialReturn<Validators, Unions<ListStrict<Validators>>, Unions<InferMessage<ListStrict<Validators>>>, ValidatableType>;

export function MapPartialParameters<
    Validators extends Validator[] = Validator[],
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validators : Validators,
    validation : (result:Unions<ListStrict<Validators>>)=>ValidatableType,
    message : (result:Unions<ListStrict<Validators>>)=>MessageType,
    stop ?: boolean,
) : MapPartialReturn<Validators, Unions<ListStrict<Validators>>, MessageType, ValidatableType>;

export function MapPartialParameters<
    Validators extends Validator[] = Validator[],
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validators : Validators,
    validation : (result:Unions<ListStrict<Validators>>)=>ValidatableType,
    message : ((result:Unions<ListStrict<Validators>>)=>MessageType|Unions<InferMessage<ListStrict<Validators>>>) = Map,
    stop  = false,
) : MapPartialReturn<Validators, Unions<ListStrict<Validators>>, MessageType|Unions<InferMessage<ListStrict<Validators>>>, ValidatableType>  {

    return MapCallback.Parameters(
        validators,
        (value, validators)=>ValidateMap.Parameters(value, validators, stop),
        validation,
        message
    ) as MapPartialReturn<Validators, Unions<ListStrict<Validators>>, MessageType, ValidatableType>;
}



/**
 * more specific implementation of {@link MapCallback}
 *
 * Validate list of value with list of {@link Validator}, according to their indexes
 * stop on encounter invalid result from {@link Validator}
 *
 * @param validators
 * list of {@link Validator} to be used against list of value
 *
 * @param validation
 * process partial result from {@link Validator} list into {@link Validatable}
 *
 * @param message
 * process partial result from {@link Validator} list into {@link Message} value
 *
 * @param stop
 * stop validation operation condition
 */

export type MapPartialArgument<
    Validators extends Validator[] = Validator[],
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
> =
    ValidatorsContainer<Validators> &
    Partial<Message<(result:Unions<ListStrict<Validators>>)=>MessageType>> &
    {
        validation : (result:Unions<ListStrict<Validators>>)=>ValidatableType,
        stop ?: boolean
    };


export function MapPartialParameter<
    Validators extends Validator[] = Validator[],
    ValidatableType extends Validatable = Validatable,
>(
    {
        validators,
        validation,
    } : StrictOmit<MapPartialArgument<Validators, ValidatableType, unknown>, 'message'>
) : MapPartialReturn<Validators, Unions<ListStrict<Validators>>, Unions<InferMessage<ListStrict<Validators>>>, ValidatableType>;

export function MapPartialParameter<
    Validators extends Validator[] = Validator[],
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    {
        validators,
        validation,
        message,
        stop,
    } : Required<MapPartialArgument<Validators, ValidatableType, MessageType>, 'message'>
) : MapPartialReturn<Validators, Unions<ListStrict<Validators>>, MessageType, ValidatableType>;


export function MapPartialParameter<
    Validators extends Validator[] = Validator[],
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    {
        validators,
        validation,
        message,
        stop,
    } : MapPartialArgument<Validators, ValidatableType, MessageType>
) : MapPartialReturn<Validators, Unions<ListStrict<Validators>>, MessageType|Unions<InferMessage<ListStrict<Validators>>>, ValidatableType>  {

    return MapPartialParameters(validators, validation, message as (result:Unions<ListStrict<Validators>>)=>MessageType, stop);
}

/**
 * Base {@link Validator} for validating list of value with list of  {@link Validator}
 *
 * @template MessageT
 * see {@link Validator}
 *
 *
 * @template ValidatorsT
 * list of {@link Validator} to be used against list of value
 *
 * @template ValidatorsT
 * list of {@link Validator} result
 *
 * @template MessageT
 * message type for {@link Message} value
 *
 * @template ValidatableT
 * result {@link Validatable} from {@template Validatables}
 */
export {MapPartialReturn};


namespace MapPartial {
    export const Parameters = MapPartialParameters;
    export const Parameter = MapPartialParameter;
    export type Argument<
        Validators extends Validator[] = Validator[],
        ValidatableType extends Validatable = Validatable,
        MessageType = unknown,
    > = MapPartialArgument<
        Validators,
        ValidatableType,
        MessageType
    >;
    export type Return<
        ValidatorsType extends Validator[],
        Validatables extends Instance[],
        MessageType,
        ValidatableType extends Validatable
    > = MapPartialReturn<
        ValidatorsType,
        Validatables,
        MessageType,
        ValidatableType
    >;
}
export default MapPartial;
