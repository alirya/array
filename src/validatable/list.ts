import Validator from "@dikac/t-validator/validator";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableContainer from "@dikac/t-validatable/validatable/validatable";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Message from "@dikac/t-message/message";
import Messages from "../message/messages/messages";
import Instance from "@dikac/t-validator/validatable/validatable";
import Validatables from "./validatables/validatables";
import Simple from "@dikac/t-validator/validatable/simple";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";

export default interface List<
    ValueType extends unknown[],
    ValidatorType extends Validator = Validator,
    Results extends Instance[] = Instance[],
    MessageType = unknown,
    ValidatableType extends Validatable = Validatable
> extends
    Readonly<Value<ValueType>>,
    Readonly<Validatable>,
    Readonly<ValidatorContainer<ValidatorType>>,
    Readonly<Message<MessageType>>,
    Readonly<Messages<Results>>,
    Readonly<Validatables<Results>>,
    Readonly<ValidatableContainer<ValidatableType>> {
}




