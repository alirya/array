import Validator from "@dikac/t-validator/validator";
import Function from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";
import ValidateMap from "./validatable/list/map";
import ListReturn from "./validatable/list/infer";
import MapCallback, {Interface as MapCallbackInterface} from "./map-callback";
import Message from "@dikac/t-message/message";

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
export default function  Map<
    ValidatorsT extends Validator[] = Validator[],
    ValidatableT extends Validatable = Validatable,
    MessageT = unknown,
>(
    validators : ValidatorsT,
    validation : Function<[ListReturn<ValidatorsT>], ValidatableT>,
    message : Function<[ListReturn<ValidatorsT>], MessageT>
) : Omit<MapCallbackInterface<ValidatorsT, ListReturn<ValidatorsT>, MessageT, ValidatableT>, 'map'>  {

    return new MapCallback(validators, ValidateMap, validation, message);
}

