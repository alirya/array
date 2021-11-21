import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import InferReturn from "@dikac/t-validator/validatable/infer-static";
import Unions from "../unions";
import List from "./list";
import InferMessage from "../message/message/list/infer";
import Message from "@dikac/t-message/message";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import StrictOmit from "@dikac/t-object/strict-omit";
import {Required} from "utility-types";
import ListPartialParameters from "./list-partial-parameters";

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

export type ListPartialArgument<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
> =
    ValidatorContainer<ValidatorType> &
    Partial<Message<(result:Unions<InferReturn<ValidatorType>[]>)=>MessageType>> &
    {
        validation : (result:Unions<InferReturn<ValidatorType>[]>)=>ValidatableType,
        stop ?: boolean
    };

export default function ListPartialParameter<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
    // validator : ValidatorType,
    // validation : (result:Union<InferReturn<ValidatorType>[]>)=>ValidatableType,
    {
        validator,
        validation,
        stop,
    } : StrictOmit<ListPartialArgument<unknown, ValidatorType, ValidatableType>, 'message'>

) : List<Unions<InferMessage<InferReturn<ValidatorType>[]>>, ValidatorType, Unions<InferReturn<ValidatorType>[]>, ValidatableType>;

export default function ListPartialParameter<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
    // validator : ValidatorType,
    // validation : (result:Union<InferReturn<ValidatorType>[]>)=>ValidatableType,
    // message : (result:Union<InferReturn<ValidatorType>[]>)=>MessageType,
    // stop ?: boolean,
    {
        validator,
        validation,
        message,
        stop,
    } : Required<ListPartialArgument<MessageType, ValidatorType, ValidatableType>, 'message'>

) : List<MessageType, ValidatorType, Unions<InferReturn<ValidatorType>[]>, ValidatableType>;

export default function ListPartialParameter<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
    // validator : ValidatorType,
    // validation : (result:Union<InferReturn<ValidatorType>[]>)=>ValidatableType,
    // message : ((result:Union<InferReturn<ValidatorType>[]>)=>MessageType|Union<InferMessage<InferReturn<ValidatorType>[]>>) = Map,
    // stop : boolean = false,
    {
        validator,
        validation,
        message,
        stop,
    } : ListPartialArgument<MessageType, ValidatorType, ValidatableType>,

) : List<MessageType|Unions<InferMessage<InferReturn<ValidatorType>[]>>, ValidatorType, Unions<InferReturn<ValidatorType>[]>, ValidatableType> {

    return ListPartialParameters(validator, validation, message as (result:Unions<InferReturn<ValidatorType>[]>)=>MessageType, stop);
}
