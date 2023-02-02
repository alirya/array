import Validator from '@alirya/validator/validator';
import EmptyValidatable from '../validatable/empty';
import EmptyMessage from '../validatable/string/empty';
import Validatable from '@alirya/validator/validatable/validatable';
import EmptyMessageParameter from '../validatable/string/empty';
import {ValidatableParameter, ValidatableParameters} from '@alirya/validator/message/function/validatable';
import Chain from '../../../validator/dist/chain';
import {ArrayParameters} from './array';
import ArrayMessage from '../validatable/string/array';

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
