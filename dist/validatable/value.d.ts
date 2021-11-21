import Validator from "@dikac/t-validator/validator";
import BaseValue from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableContainer from "@dikac/t-validatable/validatable/validatable";
import Validators from "../validator/validators/validators";
import Message from "@dikac/t-message/message";
import Messages from "../message/messages/messages";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Validatables from "./validatables/validatables";
export default interface Value<ValueType, Container extends Validator[], Results extends Instance[], MessageType, ValidatableType extends Validatable> extends BaseValue<ValueType>, Validatable, Validators<Container>, Message<MessageType>, Messages<Results>, ValidatableContainer<ValidatableType>, Validatables<Results> {
}
