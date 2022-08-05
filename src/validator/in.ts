import Validator from '@alirya/validator/simple';
import In from '../validatable/in';
import Instance from '@alirya/validator/validatable/validatable';
import InMessage from '../assert/string/in';
import Callable from '@alirya/function/callable';
import {Optional} from 'utility-types';

/**
 *  validate if value is array
 */
export function InParameters<ValueType>(
    array: ReadonlyArray<ValueType>,
    validation ?: (value:ValueType, list: ReadonlyArray<ValueType>)=>boolean,
) : Validator<ValueType, ValueType, Readonly<Instance<ValueType, string>>>;

export function InParameters<ValueType, MessageType>(
    array: ReadonlyArray<ValueType>,
    validation ?: (value:ValueType, list: ReadonlyArray<ValueType>)=>boolean,
    message ?: Callable<[ValueType, boolean, ReadonlyArray<ValueType>], MessageType>
) : Validator<ValueType, ValueType, Readonly<Instance<ValueType, MessageType>>>;

export function InParameters<ValueType, MessageType>(
    array: ReadonlyArray<ValueType>,
    validation : (value:ValueType, list: ReadonlyArray<ValueType>)=>boolean = (value, list) => list.includes(value),
    message : Callable<[ValueType, boolean, ReadonlyArray<ValueType>], MessageType|string> = InMessage.Parameters
) : Validator<ValueType, ValueType, Readonly<Instance<ValueType, MessageType>>> {

    return function (value) {

        return new In.Parameters(value, array, validation, message);

    } as Validator<ValueType, ValueType, Readonly<Instance<ValueType, MessageType>>>;
}


export type InArgument<ValueType, MessageType> = Optional<Omit<In.Argument<ValueType, MessageType>, 'value'>, 'validation'|'message'>;

/**
 *  validate if value is array
 */
export function InParameter<ValueType>(array: InArgument<ValueType, string>) : Validator<unknown, Array<any>, Readonly<Instance<unknown, string>>>;

export function InParameter<ValueType, MessageType>(
    {
        array,
        validation,
        message,
    }: InArgument<ValueType, MessageType>,
) : Validator<ValueType, ValueType, Readonly<Instance<ValueType, MessageType>>>;

export function InParameter<ValueType, MessageType>(
    {
        array,
        validation = ({value, array}) => array.includes(value),
        message = InMessage.Parameter,
    }: InArgument<ValueType, MessageType|string>
) : Validator<ValueType, ValueType, Readonly<Instance<ValueType, MessageType|string>>> {

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
