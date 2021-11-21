import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import InferReturn from "@dikac/t-validator/validatable/infer-static";
import List from "./list";
import InferMessage from "../message/message/list/infer";
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
export default function ListAllParameters<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable>(validator: ValidatorType, validation: (result: InferReturn<ValidatorType>[]) => ValidatableType): List<InferMessage<InferReturn<ValidatorType>[]>, ValidatorType, InferReturn<ValidatorType>[], ValidatableType>;
export default function ListAllParameters<MessageType = unknown, ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable>(validator: ValidatorType, validation: (result: InferReturn<ValidatorType>[]) => ValidatableType, message: (result: InferReturn<ValidatorType>[]) => MessageType): List<MessageType, ValidatorType, InferReturn<ValidatorType>[], ValidatableType>;
