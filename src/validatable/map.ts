import Validator from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import ValidatableContainer from '@alirya/validatable/validatable/validatable';
import ListParameter from '../validator/subject/list/allow';
import Value from '@alirya/value/value';
import Validators from '../validator/validators/validators';
import Message from '@alirya/message/message';
import Messages from '../message/messages/messages';
import Validatables from './validatables/validatables';
import Instance from '@alirya/validator/validatable/validatable';

export default interface Map<
    ValidatorsType extends Validator[],
    Result extends Instance[],
    MessageType,
    ValidatableType extends Validatable,
> extends
    Readonly<Validators<ValidatorsType>>,
    Readonly<Value<ListParameter<ValidatorsType>>>,
    Readonly<Validatable>,
    Readonly<Validatables<Result>>,
    Readonly<Message<MessageType>>,
    Readonly<ValidatableContainer<ValidatableType>>,
    Readonly<Messages<Result>> {}





