import Validator from '@alirya/validator/validator.js';
import EmptyValidatable from '../validatable/empty.js';
import EmptyMessage from '../validatable/string/empty.js';
import Validatable from '@alirya/validator/validatable/validatable.js';
import EmptyMessageParameter from '../validatable/string/empty.js';
import {ValidatableParameter, ValidatableParameters} from '@alirya/validator/message/function/validatable.js';

/**
 *  validate if array is empty
 */

export function EmptyParameters() : Validator<Array<any>, [], boolean, boolean, Validatable<Array<any>, string>>;

export function EmptyParameters<MessageType>(
    message : ValidatableParameters<Array<any>, MessageType>
) : Validator<Array<any>, [], boolean, boolean, Validatable<Array<any>, MessageType>>;

export function EmptyParameters<MessageType>(
    message : ValidatableParameters<Array<any>, MessageType|string> = EmptyMessage.Parameters
) : Validator<Array<any>, [], boolean, boolean, Validatable<Array<any>, MessageType>> {

    return function (value) {

        return EmptyValidatable.Parameters(value, message);

    } as Validator<Array<any>, [], boolean, boolean, Validatable<Array<any>, MessageType>>;
}


/**
 *  validate if array is empty
 */

export function EmptyParameter() : Validator<Array<any>, [], boolean, boolean, Validatable<Array<any>, string>>;

export function EmptyParameter<MessageType>(
    message : ValidatableParameter<Array<any>, MessageType>
) : Validator<Array<any>, [], boolean, boolean, Validatable<Array<any>, MessageType>>;

export function EmptyParameter<MessageType>(
    message : ValidatableParameter<Array<any>, MessageType|string> = EmptyMessageParameter.Parameter
) : Validator<Array<any>, [], boolean, boolean, Validatable<Array<any>, MessageType|string>> {

    return EmptyParameters((value, valid) => message({value, valid}));
}


namespace Empty {
    export const Parameters = EmptyParameters;
    export const Parameter = EmptyParameter;
}
export default Empty;
