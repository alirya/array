import Validator from "@alirya/validator/validator";
import ValidatorContainer from "@alirya/validator/validator/validator";
import Validatable from "@alirya/validatable/validatable";
import InferReturn from "@alirya/validator/validatable/infer-static";
import List from "./list";
import InferMessage from "../message/message/list/infer";
import Map from "../message/message/list/map";
import ListAllParameters from "./lisall-parameters";
import Message from "@alirya/message/message";
import StrictOmit from "@alirya/object/strict-omit";


export type ListAllParameterArgument<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
> = ValidatorContainer<ValidatorType> &
    Partial<Message<(result:InferReturn<ValidatorType>[])=>MessageType>> & {
    validation : (result:InferReturn<ValidatorType>[])=>ValidatableType
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
export default function ListAllParameter<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
    {
        validator,
        validation,
    } : StrictOmit<ListAllParameterArgument<unknown, ValidatorType, ValidatableType>, 'message'>
) : List<InferMessage<InferReturn<ValidatorType>[]>, ValidatorType, InferReturn<ValidatorType>[], ValidatableType>;
export default function ListAllParameter<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
    {
        validator,
        validation,
        message
    } : Required<ListAllParameterArgument<unknown, ValidatorType, ValidatableType>>

) : List<MessageType, ValidatorType, InferReturn<ValidatorType>[], ValidatableType>;

export default function ListAllParameter<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
    {
        validator,
        validation,
        message = Map,
    } : ListAllParameterArgument<MessageType|InferMessage<InferReturn<ValidatorType>[]>, ValidatorType, ValidatableType>
) : List<MessageType|InferMessage<InferReturn<ValidatorType>[]>, ValidatorType, InferReturn<ValidatorType>[], ValidatableType> {

    return ListAllParameters(
        validator,
        validation,
        message
    ) ;
}

