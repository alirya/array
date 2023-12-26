import EmptyArgument from '../boolean/empty.js';
import {CallbackClassParameters} from '@axiona/validator/validatable/callback.js';
import Validatable from '@axiona/validator/validatable/validatable.js';
import Value from '@axiona/value/value.js';
import Message from '@axiona/message/message.js';
import {ValidatableParameters, ValidatableParameter} from '@axiona/validator/message/function/validatable.js';

export function EmptyParameters<Values extends unknown[], MessageType>(
    value : Values,
    message : ValidatableParameters<Values, MessageType>,
) : Readonly<Validatable<Values, MessageType>> {

    return new CallbackClassParameters<Values>(value, EmptyArgument, message) as Readonly<Validatable<Values, MessageType>>;
}



export function EmptyParameter<MessageType, Values extends unknown[]>(
    {
        value,
        message,
    } : Value<Values> & Message<ValidatableParameter<Values, MessageType>>
) : Readonly<Validatable<Values, MessageType>> {

    return EmptyParameters(value, (value, valid) => message({value, valid}));
}



namespace Empty {
    export const Parameters = EmptyParameters;
    export const Parameter = EmptyParameter;
}
export default Empty;
