import Validator from "@dikac/t-validator/validator";
import SimpleValidator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import BaseInfer from "@dikac/t-validator/base/infer";
import TypeInfer from "@dikac/t-validator/expectation/infer";
import ValidatableListInterface from "../validatable/list";
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
declare type List<MessageType, ValidatorType extends Validator, Validatables extends ValidatorValidatable[], ValidatableType extends Validatable> = SimpleValidator<BaseInfer<ValidatorType>[], TypeInfer<ValidatorType>[], ValidatableListInterface<TypeInfer<ValidatorType>[], ValidatorType, Validatables, MessageType, ValidatableType>>;
export default List;
