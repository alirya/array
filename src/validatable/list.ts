import Validator from '@alirya/validator/validator';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import ValidatableContainer from '@alirya/validatable/validatable/validatable';
import ValidatorContainer from '@alirya/validator/validator/validator';
import Message from '@alirya/message/message';
import Messages from '../message/messages/messages';
import Instance from '@alirya/validator/validatable/validatable';
import Validatables from './validatables/validatables';

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




