import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import InferReturn from "@dikac/t-validator/validatable/infer-static";
import Unions from "../unions";
import List from "./list";
import InferMessage from "../message/message/list/infer";
/**
 * more specific implementation of {@link ListCallback}
 *
 * Validate list of value with {@link Validator}
 * stop on encounter invalid result from {@link Validator}
 *
 * @param validator
 * to be used against list of value
 *
 * @param validation
 * process all result from {@link Validator} list into {@link Validatable}
 *
 * @param message
 * process all result from {@link Validator} list into {@link Message} value
 *
 * @param stop
 * stop validation operation condition
 */
export default function ListPartialParameters<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable>(validator: ValidatorType, validation: (result: Unions<InferReturn<ValidatorType>[]>) => ValidatableType): List<Unions<InferMessage<InferReturn<ValidatorType>[]>>, ValidatorType, Unions<InferReturn<ValidatorType>[]>, ValidatableType>;
export default function ListPartialParameters<MessageType = unknown, ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable>(validator: ValidatorType, validation: (result: Unions<InferReturn<ValidatorType>[]>) => ValidatableType, message: (result: Unions<InferReturn<ValidatorType>[]>) => MessageType, stop?: boolean): List<MessageType, ValidatorType, Unions<InferReturn<ValidatorType>[]>, ValidatableType>;
