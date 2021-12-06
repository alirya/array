import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/validatable";
import BaseInfer from "@dikac/t-validator/subject/allow";
import List from "./list";
/**
 * Base {@link Validator} for validating list of value with {@link Validator}
 *
 * @template ValueT
 * see {@link Validator}
 *
 * @template MessageT
 * see {@link Validator}
 *
 * @template ValidatorsT
 * to be used against list of value
 *
 * @template Validatables
 * result after processing {@template ValidatorsT} with {@template BaseT} or {@template ValueT}
 *
 * @template ValidatableT
 * final result after processing {@template Result}
 */
export default function ListCallbackParameters<MessageType = unknown, ValidatorType extends Validator = Validator, Validatables extends Instance[] = Instance[], ValidatableType extends Validatable = Validatable>(validator: ValidatorType, map: (value: BaseInfer<ValidatorType>[], validator: ValidatorType) => Validatables, validation: (result: Validatables) => ValidatableType, message: (result: Validatables) => MessageType): List<MessageType, ValidatorType, Validatables, ValidatableType>;
