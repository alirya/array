import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableContainer from "@dikac/t-validatable/validatable/validatable";
import ListParameter from "../validator/base/list/infer";
import Value from "@dikac/t-value/value";
import Validators from "../validator/validators/validators";
import Message from "@dikac/t-message/message";
import Messages from "../message/messages/messages";
import Validatables from "./validatables/validatables";
import Instance from "@dikac/t-validator/validatable/dynamic";
import BaseList from "../validator/base/list/infer";
export default interface Map<ValidatorsType extends Validator[], Result extends Instance[], MessageType, ValidatableType extends Validatable, ValueT extends BaseList<ValidatorsType>> extends Readonly<Validators<ValidatorsType>>, Readonly<Value<ListParameter<ValidatorsType>>>, Readonly<Validatable>, Readonly<Validatables<Result>>, Readonly<Message<MessageType>>, Readonly<ValidatableContainer<ValidatableType>>, Readonly<Messages<Result>> {
}
