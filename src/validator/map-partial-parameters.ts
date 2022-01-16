import Validator from "@alirya/validator/validator";
import Validatable from "@alirya/validatable/validatable";
import ValidateMap from "./validatable/list/map-partial-parameters";
import MapCallback from "./map-callback-parameters";
import MapCallbackInterface from "./map";
import ListStrict from "./validatable/list/infer";
import Unions from "../unions";
import InferMessage from "../message/message/list/infer";
import Map from "../message/message/list/map";


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

export default function MapPartialParameters<
    Validators extends Validator[] = Validator[],
    ValidatableType extends Validatable = Validatable,
>(
    validators : Validators,
    validation : (result:Unions<ListStrict<Validators>>)=>ValidatableType,
) : MapCallbackInterface<Validators, Unions<ListStrict<Validators>>, Unions<InferMessage<ListStrict<Validators>>>, ValidatableType>;

export default function MapPartialParameters<
    Validators extends Validator[] = Validator[],
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validators : Validators,
    validation : (result:Unions<ListStrict<Validators>>)=>ValidatableType,
    message : (result:Unions<ListStrict<Validators>>)=>MessageType,
    stop ?: boolean,
) : MapCallbackInterface<Validators, Unions<ListStrict<Validators>>, MessageType, ValidatableType>;

export default function MapPartialParameters<
    Validators extends Validator[] = Validator[],
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validators : Validators,
    validation : (result:Unions<ListStrict<Validators>>)=>ValidatableType,
    message : ((result:Unions<ListStrict<Validators>>)=>MessageType|Unions<InferMessage<ListStrict<Validators>>>) = Map,
    stop : boolean = false,
) : MapCallbackInterface<Validators, Unions<ListStrict<Validators>>, MessageType|Unions<InferMessage<ListStrict<Validators>>>, ValidatableType>  {

    return MapCallback(
        validators,
        (value, validators)=>ValidateMap(value, validators, stop),
        validation,
        message
    ) as MapCallbackInterface<Validators, Unions<ListStrict<Validators>>, MessageType, ValidatableType>;
}

