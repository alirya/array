import Validator from '@axiona/validator/simple.js';
import In, {InArgumentsMessage, InArgumentMessage} from '../validatable/in.js';
import Instance from '@axiona/validator/validatable/validatable.js';
import InMessage from '../assert/string/in.js';
import Callable from '@axiona/function/callable.js';
import {Optional} from 'utility-types';
import {ArrayParameters} from './array.js';
import Chain from '@axiona/validator/chain.js';

export {
    InArgumentsMessage,
    InArgumentMessage
};
/**
 *  validate if value is array
 */
export function InParameters<ValueType>(
    array: ReadonlyArray<ValueType>,
    validation ?: (value:ValueType, list: ReadonlyArray<ValueType>)=>boolean,
) : Validator<ValueType, ValueType, string>;

export function InParameters<ValueType, MessageType>(
    array: ReadonlyArray<ValueType>,
    validation ?: (value:ValueType, list: ReadonlyArray<ValueType>)=>boolean,
    message ?: Callable<[ValueType, boolean, ReadonlyArray<ValueType>], MessageType>
) : Validator<ValueType, ValueType, MessageType>;

export function InParameters<ValueType, MessageType>(
    array: ReadonlyArray<ValueType>,
    validation : (value:ValueType, list: ReadonlyArray<ValueType>)=>boolean = (value, list) => list.includes(value),
    message : Callable<[ValueType, boolean, ReadonlyArray<ValueType>], MessageType|string> = InMessage.Parameters
) : Validator<ValueType, ValueType, MessageType> {

    return /*Chain(ArrayParameters(),*/ function (value) {

        return new In.Parameters(value, array, validation, message);

    }/*)*/ as Validator<ValueType, ValueType, MessageType>;
}


export type InArgument<ValueType, MessageType> = Optional<Omit<In.Argument<ValueType, MessageType>, 'value'>, 'validation'|'message'>;

/**
 *  validate if value is array
 */
export function InParameter<ValueType>(array: InArgument<ValueType, string>) : Validator<unknown, Array<any>, string>;

export function InParameter<ValueType, MessageType>(
    {
        array,
        validation,
        message,
    }: InArgument<ValueType, MessageType>,
) : Validator<ValueType, ValueType, MessageType>;

export function InParameter<ValueType, MessageType>(
    {
        array,
        validation = ({value, array}) => array.includes(value),
        message = InMessage.Parameter,
    }: InArgument<ValueType, MessageType|string>
) : Validator<ValueType, ValueType, MessageType|string> {

    return InParameters(
        array,
        (value, array) => validation({value, array}),
        (value, valid, array) => message({value, valid, array})
    );
}


namespace Array {
    export const Parameters = InParameters;
    export const Parameter = InParameter;
}
export default Array;
