import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import InferReturn from "@dikac/t-validator/validatable/infer-unambiguous";
import ListCallback from "./list-callback";
import ValidateMapPartial from "./validatable/list/list-partial";
import Union from "../union";
import List from "./list";
import InferMessage from "../message/message/list/infer";
import Map from "../message/message/list/map";
import Boolean from "@dikac/t-boolean/boolean";

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
export default function ListPartial<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
    validator : ValidatorType,
    validation : (result:Union<InferReturn<ValidatorType>[]>)=>ValidatableType,
    stop ?: boolean,

) : List<Union<InferMessage<InferReturn<ValidatorType>[]>>, ValidatorType, Union<InferReturn<ValidatorType>[]>, ValidatableType>;
export default function ListPartial<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
    validator : ValidatorType,
    validation : (result:Union<InferReturn<ValidatorType>[]>)=>ValidatableType,
    message : (result:Union<InferReturn<ValidatorType>[]>)=>MessageType,
    stop ?: boolean,

) : List<MessageType, ValidatorType, Union<InferReturn<ValidatorType>[]>, ValidatableType>;
export default function ListPartial<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
     validator : ValidatorType,
     validation : (result:Union<InferReturn<ValidatorType>[]>)=>ValidatableType,
     message : ((result:Union<InferReturn<ValidatorType>[]>)=>MessageType|Union<InferMessage<InferReturn<ValidatorType>[]>>)|boolean = Map,
     stop : boolean = false,

) : List<MessageType|Union<InferMessage<InferReturn<ValidatorType>[]>>, ValidatorType, Union<InferReturn<ValidatorType>[]>, ValidatableType> {

    if(Boolean(message)) {

        return ListPartial(validator, validation, Map,  message) as
            List<Union<InferMessage<InferReturn<ValidatorType>[]>>, ValidatorType, Union<InferReturn<ValidatorType>[]>, ValidatableType>
    }


    return ListCallback(
        validator,
        (value, validators)=>ValidateMapPartial(value, validators, stop),
        validation,
        message
    ) as List<MessageType, ValidatorType, Union<InferReturn<ValidatorType>[]>, ValidatableType>;
}


