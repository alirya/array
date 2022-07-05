import Validator from '@alirya/validator/simple.js';
import Value from '@alirya/value/value.js';
import ArrayValidatable from '../validatable/array.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import ArrayMessage from '../validatable/string/array.js';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import ArrayMessageParameter from '../validatable/string/array.js';

/**
 *  validate if value is array
 */

export function ArrayParameters() : Validator<unknown, Array<any>, Readonly<Instance<unknown, string>>>;

export function ArrayParameters<MessageType>(
    message : ValidatableParameters<Value, MessageType>
) : Validator<unknown, Array<any>, Readonly<Instance<unknown, MessageType>>>;

export function ArrayParameters<MessageType>(
    message : ValidatableParameters<Value, MessageType|string> = ArrayMessage.Parameters
) : Validator<unknown, Array<any>, Readonly<Instance<unknown, MessageType>>> {

    return function (value) {

        return  ArrayValidatable.Parameters(value, message);

    } as Validator<unknown, Array<any>, Readonly<Instance<unknown, MessageType>>>;
}


/**
 *  validate if value is array
 */
export function ArrayParameter() : Validator<unknown, Array<any>, Readonly<Instance<unknown, string>>>;

export function ArrayParameter<MessageType>(
    message : ValidatableParameter<Value, MessageType>
) : Validator<unknown, Array<any>, Readonly<Instance<unknown, MessageType>>>;

export function ArrayParameter<MessageType>(
    message : ValidatableParameter<Value, MessageType|string> = ArrayMessageParameter.Parameter
) : Validator<unknown, Array<any>, Readonly<Instance<unknown, MessageType|string>>> {

    return ArrayParameters((value, valid) => message({valid, value}));
}


namespace Array {
    export const Parameters = ArrayParameters;
    export const Parameter = ArrayParameter;
}
export default Array;
