import Validator from "@alirya/validator/validator";
import Validatable from "@alirya/validatable/validatable";
import BaseList from "./subject/list/allow";
import Instance from "@alirya/validator/validatable/validatable";
import Map from "./map";
import ValidatorsContainer from "./validators/validators";
import Message from "@alirya/message/message";
import MapCallbackParameters from "./map-callback-parameters";


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

export type ValueCallbackArgument<
    Validators extends Validator[] = Validator[],
    Validatables extends Instance[] = Instance[],
    MessageType = unknown,
    ValidatableType extends Validatable = Validatable
> =
    ValidatorsContainer<Validators> &
    Message<(result:Validatables)=>MessageType> &
    {
        map : (value:BaseList<Validators>, validators:Validators)=>Validatables;
        validation : (result:Validatables)=>ValidatableType;
    }

export default function MapCallbackParameter<
    Validators extends Validator[] = Validator[],
    Validatables extends Instance[] = Instance[],
    MessageType = unknown,
    ValidatableType extends Validatable = Validatable
>(
    {
        validators,
        map,
        validation,
        message,
    } : ValueCallbackArgument<Validators, Validatables, MessageType, ValidatableType>
) : Map<Validators, Validatables, MessageType, ValidatableType> {

    return MapCallbackParameters(validators, map, validation, message);
}


