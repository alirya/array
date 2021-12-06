import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import BaseList from "./subject/list/allow";
import Instance from "@dikac/t-validator/validatable/validatable";
import Map from "./map";
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
export default function MapCallbackParameters<Validators extends Validator[] = Validator[], Validatables extends Instance[] = Instance[], MessageType = unknown, ValidatableType extends Validatable = Validatable>(validators: Validators, map: (value: BaseList<Validators>, validators: Validators) => Validatables, validation: (result: Validatables) => ValidatableType, message: (result: Validatables) => MessageType): Map<Validators, Validatables, MessageType, ValidatableType>;
