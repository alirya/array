import Validator from "@dikac/t-validator/validator";
import SimpleValidator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Validators from "./validators/validators";
import ValidatableMapInterface from "../validatable/map";
import BaseList from "./base/list/infer";
import TypeList from "./type/list/infer";
import Instance from "@dikac/t-validator/validatable/validatable";
import Validation from "@dikac/t-validatable/validation/validation";
import Message from "@dikac/t-message/message";

/**
 * Base {@link Validator} for validating list of value with list of  {@link Validator}
 *
 * @template MessageT
 * see {@link Validator}
 *
 *
 * @template ValidatorsT
 * list of {@link Validator} to be used against list of value
 *
 * @template ValidatorsT
 * list of {@link Validator} result
 *
 * @template MessageT
 * message type for {@link Message} value
 *
 * @template ValidatableT
 * result {@link Validatable} from {@template Validatables}
 */
export default interface  Map<
    ValidatorsType extends Validator[],
    Validatables extends Instance[],
    MessageType,
    ValidatableType extends Validatable
> extends
    SimpleValidator<
        BaseList<ValidatorsType>,
        TypeList<ValidatorsType>,
        ValidatableMapInterface<ValidatorsType, Validatables, MessageType, ValidatableType, BaseList<ValidatorsType>>
    >,
    Validators<ValidatorsType>,
    Message<(results:Validatables)=>MessageType>,
    Validation<(results:Validatables)=>ValidatableType> {

}

