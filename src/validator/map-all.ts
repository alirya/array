import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidateMap from "./validatable/list/map";
import ListReturn from "./validatable/list/infer";
import MapCallbackInterface from "./map";
import MapCallback from "./map-callback";
import InferMessage from "../message/message/list/infer";
import InferReturn from "@dikac/t-validator/validatable/infer-unambiguous";
import InferList from "./validatable/list/infer";
import Map from "../message/message/list/map";

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
export default function  MapAll<
    Validators extends Validator[] = Validator[],
    ValidatableType extends Validatable = Validatable,
    >(
    validators : Validators,
    validation : (result:ListReturn<Validators>)=>ValidatableType,
) : MapCallbackInterface<Validators, ListReturn<Validators>, InferMessage<InferList<Validators>>, ValidatableType>;

export default function  MapAll<
    Validators extends Validator[] = Validator[],
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
    >(
    validators : Validators,
    validation : (result:ListReturn<Validators>)=>ValidatableType,
    message : (result:ListReturn<Validators>)=>MessageType
) : MapCallbackInterface<Validators, ListReturn<Validators>, MessageType, ValidatableType>;

export default function  MapAll<
    Validators extends Validator[] = Validator[],
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validators : Validators,
    validation : (result:ListReturn<Validators>)=>ValidatableType,
    message : (result:ListReturn<Validators>)=>MessageType|InferMessage<InferList<Validators>> = Map
) : MapCallbackInterface<Validators, ListReturn<Validators>, MessageType, ValidatableType>  {

    return MapCallback(validators, ValidateMap, validation, message) as
        MapCallbackInterface<Validators, ListReturn<Validators>, MessageType, ValidatableType>;
}

