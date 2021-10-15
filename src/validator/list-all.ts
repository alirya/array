import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import InferReturn from "@dikac/t-validator/validatable/infer-unambiguous";
import ListCallback from "./list-callback";
import ValidateMap from "./validatable/list/list";
import List from "./list";

/**
 * more specific implementation of {@link ListCallback}
 *
 * Validate list of value with {@link Validator}
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
export default function ListAll<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
    validator : ValidatorType,
    validation : (result:InferReturn<ValidatorType>[])=>ValidatableType,
    message : (result:InferReturn<ValidatorType>[])=>MessageType

) : List<MessageType, ValidatorType, InferReturn<ValidatorType>[], ValidatableType> {

    return ListCallback<
        MessageType,
        ValidatorType,
        InferReturn<ValidatorType>[],
        ValidatableType
    >(
        validator,
        ValidateMap,
        validation,
        message
    );
}

