import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/validatable";
import ListCallback from "./list-callback";
import BaseInfer from "@dikac/t-validator/base/infer";
import List from "./list";

/**
 * function factory for {@link ListCallback}
 *
 * type return has better handling by typescript
 */
export default function  ListCallbackFunction<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    Result extends Instance[] = Instance[],
    ValidatableType extends Validatable  = Validatable
>  (
     validator : ValidatorType,
     map : (value:BaseInfer<ValidatorType>[], validator:ValidatorType)=>Result,
     validation : (results:Result)=>ValidatableType,
     message : (results:Result)=>MessageType
) : List<MessageType, ValidatorType, Result, ValidatableType> {

    return ListCallback(validator, map, validation, message);
}




