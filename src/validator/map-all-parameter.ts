import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ListReturn from "./validatable/list/infer";
import MapCallbackInterface from "./map";
import InferMessage from "../message/message/list/infer";
import InferList from "./validatable/list/infer";
import ValidatorsContainer from "./validators/validators";
import Message from "@dikac/t-message/message";
import Unions from "../unions";
import ListStrict from "./validatable/list/infer";
import StrictOmit from "@dikac/t-object/strict-omit";
import {Required} from "utility-types";
import MapAllParameters from "./map-all-parameters";


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


export default function MapAllParameter<
    Validators extends Validator[] = Validator[],
    ValidatableType extends Validatable = Validatable,
>(
    {
        validators,
        validation,
    } : StrictOmit<MapAllArgument<Validators, ValidatableType>, 'message'>
) : MapCallbackInterface<Validators, ListReturn<Validators>, InferMessage<InferList<Validators>>, ValidatableType>;

export default function MapAllParameter<
    Validators extends Validator[] = Validator[],
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    {
        validators,
        validation,
        message,
    } : Required<MapAllArgument<Validators, ValidatableType>, 'message'>
) : MapCallbackInterface<Validators, ListReturn<Validators>, MessageType, ValidatableType>;

export default function MapAllParameter<
    Validators extends Validator[] = Validator[],
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    {
        validators,
        validation,
        message,
    } : MapAllArgument<Validators, ValidatableType>
) : MapCallbackInterface<Validators, ListReturn<Validators>, MessageType, ValidatableType>  {

    return MapAllParameters(validators, validation, message as (result:ListReturn<Validators>)=>MessageType);
}

