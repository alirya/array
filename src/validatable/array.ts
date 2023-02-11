import {CallbackClassParameters} from '@alirya/validator/validatable/callback.js';
import ArrayGuard from '../boolean/array.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import Value from '@alirya/value/value.js';
import Simple from '@alirya/validator/validatable/simple.js';
import Message from '@alirya/message/message.js';


export function ArrayParameters<Argument, MessageType>(
    value : Argument,
    message : ValidatableParameters<Argument, MessageType>
) : ArrayValidator<Argument, MessageType> {

    return <Readonly<Simple<Argument, unknown[], MessageType>>> new CallbackClassParameters<Argument>(value, ArrayGuard, message);
}

export type ArrayArgument<Argument, MessageType> =
    Value<Argument> &
    Message<ValidatableParameter<Argument, MessageType>>;

export function ArrayParameter<Argument, MessageType>(
    {
        value,
        message,
    } : ArrayArgument<Argument, MessageType>
) : ArrayValidator<Argument, MessageType> {

    return ArrayParameters(value, (value, valid) => message({value, valid}));
}

export {ArrayParameters as ArrayValidatorParameters};

export type ArrayValidator<Argument, MessageType> = Readonly<Simple<Argument, unknown[], MessageType>>;

namespace Array {
    export const Parameters = ArrayParameters;
    export const Parameter = ArrayParameter;
    export type Argument<Argument, MessageType>  = ArrayArgument<Argument, MessageType>;
}
export default Array;
