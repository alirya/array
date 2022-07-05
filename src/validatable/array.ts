import {CallbackClassParameters} from '@alirya/validator/validatable/callback.js';
import ObjectGuard from '../boolean/array.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import Value from '@alirya/value/value.js';
import Simple from '@alirya/validator/validatable/simple.js';
import Message from '@alirya/message/message.js';


export function ArrayParameters<Argument, MessageType>(
    value : Argument,
    message : ValidatableParameters<Argument, MessageType>
) : ArrayReturn<Argument, MessageType> {

    return <Readonly<Simple<Argument, unknown[], Instance<Argument, MessageType>>>> new CallbackClassParameters<Argument>(value, ObjectGuard, message);
}

export type ArrayArgument<Argument, MessageType> =
    Value<Argument> &
    Message<ValidatableParameter<Argument, MessageType>>;

export function ArrayParameter<Argument, MessageType>(
    {
        value,
        message,
    } : ArrayArgument<Argument, MessageType>
) : ArrayReturn<Argument, MessageType> {

    return ArrayParameters(value, (value, valid) => message({value, valid}));
}

export type ArrayReturn<Argument, MessageType> = Readonly<Simple<Argument, unknown[], Instance<Argument, MessageType>>>;

namespace Array {
    export const Parameters = ArrayParameters;
    export const Parameter = ArrayParameter;
    export type Argument<Argument, MessageType>  = ArrayArgument<Argument, MessageType>;
}
export default Array;
