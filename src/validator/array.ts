import Validator from '@alirya/validator/simple';
import Value from '@alirya/value/value';
import ArrayValidatable from '../validatable/array';
import Instance from '@alirya/validator/validatable/validatable';
import ArrayMessage from '../validatable/string/array';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';
import ArrayMessageParameter from '../validatable/string/array';

/**
 *  validate if value is array
 */

export function ArrayParameters() : Validator<unknown, Array<any>, string>;

export function ArrayParameters<MessageType>(
    message : ValidatableParameters<Value, MessageType>
) : Validator<unknown, Array<any>, MessageType>;

export function ArrayParameters<MessageType>(
    message : ValidatableParameters<Value, MessageType|string> = ArrayMessage.Parameters
) : Validator<unknown, Array<any>, MessageType|string> {

    return function (value) {

        return  ArrayValidatable.Parameters(value, message);

    } as Validator<unknown, Array<any>, MessageType|string>;
}


/**
 *  validate if value is array
 */
export function ArrayParameter() : Validator<unknown, Array<any>, string>;

export function ArrayParameter<MessageType>(
    message : ValidatableParameter<Value, MessageType>
) : Validator<unknown, Array<any>, MessageType>;

export function ArrayParameter<MessageType>(
    message : ValidatableParameter<Value, MessageType|string> = ArrayMessageParameter.Parameter
) : Validator<unknown, Array<any>, MessageType|string> {

    return ArrayParameters((value, valid) => message({valid, value}));
}


namespace Array {
    export const Parameters = ArrayParameters;
    export const Parameter = ArrayParameter;
}
export default Array;
