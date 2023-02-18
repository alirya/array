import Validator from '@alirya/validator/validator.js';
import EmptyValidatable from '../validatable/empty.js';
import EmptyMessage from '../validatable/string/empty.js';
import Validatable from '@alirya/validator/validatable/validatable.js';
import EmptyMessageParameter from '../validatable/string/empty.js';
import {ValidatableParameter, ValidatableParameters} from '@alirya/validator/message/function/validatable.js';
import Chain from '@alirya/validator/chain.js';
import {ArrayParameters} from './array.js';
import ArrayMessage from '../validatable/string/array.js';

/**
 *  validate if array is empty
 */

export function EmptyParameters() : Validator<Array<any>, [], boolean, boolean, string>;

export function EmptyParameters<MessageType>(
    message : ValidatableParameters<Array<any>, MessageType>
) : Validator<Array<any>, [], boolean, boolean, MessageType>;

export function EmptyParameters<MessageType>(
    message : ValidatableParameters<Array<any>, MessageType|string> = EmptyMessage.Parameters
) : Validator<Array<any>, [], boolean, boolean, MessageType> {

    return Chain(ArrayParameters(), function (value) {

        return EmptyValidatable.Parameters(value, message);

    }) as Validator<Array<any>, [], boolean, boolean, MessageType>;
}


/**
 *  validate if array is empty
 */

export function EmptyParameter() : Validator<Array<any>, [], boolean, boolean, string>;

export function EmptyParameter<MessageType>(
    message : ValidatableParameter<Array<any>, MessageType>
) : Validator<Array<any>, [], boolean, boolean, MessageType>;

export function EmptyParameter<MessageType>(
    message : ValidatableParameter<Array<any>, MessageType|string> = EmptyMessageParameter.Parameter
) : Validator<Array<any>, [], boolean, boolean, MessageType|string> {

    return EmptyParameters((value, valid) => message({value, valid}));
}


namespace Empty {
    export const Parameters = EmptyParameters;
    export const Parameter = EmptyParameter;
}
export default Empty;
