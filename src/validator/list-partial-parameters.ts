import Validator from "@alirya/validator/validator";
import Validatable from "@alirya/validatable/validatable";
import InferReturn from "@alirya/validator/validatable/infer-static";
import ListCallback from "./liscallback-parameters";
import ValidateMapPartial from "./validatable/list/lispartial-parameters";
import Unions from "../unions";
import List from "./list";
import InferMessage from "../message/message/list/infer";
import Map from "../message/message/list/map";

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
export default function ListPartialParameters<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
    validator : ValidatorType,
    validation : (result:Unions<InferReturn<ValidatorType>[]>)=>ValidatableType,

) : List<Unions<InferMessage<InferReturn<ValidatorType>[]>>, ValidatorType, Unions<InferReturn<ValidatorType>[]>, ValidatableType>;

export default function ListPartialParameters<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
    validator : ValidatorType,
    validation : (result:Unions<InferReturn<ValidatorType>[]>)=>ValidatableType,
    message : (result:Unions<InferReturn<ValidatorType>[]>)=>MessageType,
    stop ?: boolean,

) : List<MessageType, ValidatorType, Unions<InferReturn<ValidatorType>[]>, ValidatableType>;

export default function ListPartialParameters<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
     validator : ValidatorType,
     validation : (result:Unions<InferReturn<ValidatorType>[]>)=>ValidatableType,
     message : ((result:Unions<InferReturn<ValidatorType>[]>)=>MessageType|Unions<InferMessage<InferReturn<ValidatorType>[]>>) = Map,
     stop : boolean = false,

) : List<MessageType|Unions<InferMessage<InferReturn<ValidatorType>[]>>, ValidatorType, Unions<InferReturn<ValidatorType>[]>, ValidatableType> {

    return ListCallback(
        validator,
        (value, validators)=>ValidateMapPartial(value, validators, stop),
        validation,
        message
    ) as List<MessageType, ValidatorType, Unions<InferReturn<ValidatorType>[]>, ValidatableType>;
}



