import Validator from '@alirya/validator/validator';
import BaseValue from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import ValidatableContainer from '@alirya/validatable/validatable/validatable';
import Validators from '../validator/validators/validators';
import Message from '@alirya/message/message';
import Messages from '../message/messages/messages';
import Instance from '@alirya/validator/validatable/validatable';
import Validatables from './validatables/validatables';


export default interface Value<
    ValueType,
    Container extends Validator[],
    Results extends Instance[],
    MessageType,
    ValidatableType extends Validatable
> extends
    BaseValue<ValueType>,
    Validatable,
    Validators<Container>,
    Message<MessageType>,
    Messages<Results>,
    ValidatableContainer<ValidatableType>,
    Validatables<Results>
{}


