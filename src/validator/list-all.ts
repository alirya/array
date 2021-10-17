import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import InferReturn from "@dikac/t-validator/validatable/infer-unambiguous";
import ListCallback from "./list-callback";
import ValidateMap from "./validatable/list/list";
import List from "./list";
import InferMessage from "../message/message/list/infer";
import Map from "../message/message/list/map";

/**
 * more specific implementation of {@link ListCallback}
 *
 * Validate all list of value with {@link Validator}
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
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
    validator : ValidatorType,
    validation : (result:InferReturn<ValidatorType>[])=>ValidatableType,

) : List<InferMessage<InferReturn<ValidatorType>[]>, ValidatorType, InferReturn<ValidatorType>[], ValidatableType>;
export default function ListAll<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
    validator : ValidatorType,
    validation : (result:InferReturn<ValidatorType>[])=>ValidatableType,
    message : (result:InferReturn<ValidatorType>[])=>MessageType

) : List<MessageType, ValidatorType, InferReturn<ValidatorType>[], ValidatableType>;

export default function ListAll<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
    validator : ValidatorType,
    validation : (result:InferReturn<ValidatorType>[])=>ValidatableType,
    message : (result:InferReturn<ValidatorType>[])=>MessageType|InferMessage<InferReturn<ValidatorType>[]> = Map

) : List<MessageType, ValidatorType, InferReturn<ValidatorType>[], ValidatableType> {

    return ListCallback(
        validator,
        ValidateMap,
        validation,
        message
    ) as List<MessageType, ValidatorType, InferReturn<ValidatorType>[], ValidatableType>;
}

