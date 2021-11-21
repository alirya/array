import Validator from "@dikac/t-validator/validator";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import InferReturn from "@dikac/t-validator/validatable/infer-static";
import List from "./list";
import InferMessage from "../message/message/list/infer";
import Message from "@dikac/t-message/message";
import StrictOmit from "@dikac/t-object/strict-omit";
export declare type ListAllParameterArgument<MessageType = unknown, ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable> = ValidatorContainer<ValidatorType> & Partial<Message<(result: InferReturn<ValidatorType>[]) => MessageType>> & {
    validation: (result: InferReturn<ValidatorType>[]) => ValidatableType;
};
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
export default function ListAllParameter<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable>({ validator, validation, }: StrictOmit<ListAllParameterArgument<unknown, ValidatorType, ValidatableType>, 'message'>): List<InferMessage<InferReturn<ValidatorType>[]>, ValidatorType, InferReturn<ValidatorType>[], ValidatableType>;
export default function ListAllParameter<MessageType = unknown, ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable>({ validator, validation, message }: Required<ListAllParameterArgument<unknown, ValidatorType, ValidatableType>>): List<MessageType, ValidatorType, InferReturn<ValidatorType>[], ValidatableType>;
