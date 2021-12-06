import Validator from "@dikac/t-validator/validator";
import SimpleValidator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableMapInterface from "../validatable/map";
import BaseList from "./subject/list/allow";
import TypeList from "./subject/list/expectation";
import Instance from "@dikac/t-validator/validatable/validatable";
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
declare type Map<ValidatorsType extends Validator[], Validatables extends Instance[], MessageType, ValidatableType extends Validatable> = SimpleValidator<BaseList<ValidatorsType>, TypeList<ValidatorsType>, ValidatableMapInterface<ValidatorsType, Validatables, MessageType, ValidatableType>>;
export default Map;
