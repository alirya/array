import EmptyArgument from '../boolean/empty';
import {CallbackClassParameters} from '@alirya/validator/validatable/callback';
import Validatable from '@alirya/validator/validatable/validatable';
import Value from '@alirya/value/value';
import Message from '@alirya/message/message';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';

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
