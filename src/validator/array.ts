import Validator from '@axiona/validator/simple.js';
import Value from '@axiona/value/value.js';
import ArrayValidatable from '../validatable/array.js';
import Instance from '@axiona/validator/validatable/validatable.js';
import ArrayMessage from '../validatable/string/array.js';
import {ValidatableParameters, ValidatableParameter} from '@axiona/validator/message/function/validatable.js';
import ArrayMessageParameter from '../validatable/string/array.js';

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
