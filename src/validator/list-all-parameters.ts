import Validator from "@alirya/validator/validator";
import Validatable from "@alirya/validatable/validatable";
import InferReturn from "@alirya/validator/validatable/infer-static";
import ListCallback from "./liscallback-parameters";
import ValidateMap from "./validatable/list/lisparameters";
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
export default function ListAllParameters<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
    validator : ValidatorType,
    validation : (result:InferReturn<ValidatorType>[])=>ValidatableType,

) : List<InferMessage<InferReturn<ValidatorType>[]>, ValidatorType, InferReturn<ValidatorType>[], ValidatableType>;

export default function ListAllParameters<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
    validator : ValidatorType,
    validation : (result:InferReturn<ValidatorType>[])=>ValidatableType,
    message : (result:InferReturn<ValidatorType>[])=>MessageType

) : List<MessageType, ValidatorType, InferReturn<ValidatorType>[], ValidatableType>;

export default function ListAllParameters<
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

