import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidateMap from "./validatable/list/map-partial";
import MapCallback from "./map-callback";
import MapCallbackInterface from "./map";
import ListStrict from "./validatable/list/infer";
import Union from "../union";

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
export default function MapPartial<
    Validators extends Validator[] = Validator[],
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validators : Validators,
    validation : (result:Union<ListStrict<Validators>>)=>ValidatableType,
    message : (result:Union<ListStrict<Validators>>)=>MessageType,
    stop : boolean = false,
) : MapCallbackInterface<Validators, Union<ListStrict<Validators>>, MessageType, ValidatableType>  {

    return MapCallback(validators, (value, validators)=>ValidateMap(value, validators, stop), validation, message);
}
