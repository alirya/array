import Validator from '@alirya/validator/simple';
import Value from '@alirya/value/value';
import Instance from '@alirya/validator/validatable/validatable';
import ArrayMessage from '../validatable/string/array-parameter';
import MessageCallback from '@alirya/validator/message/function/validatable-parameter';
import ArrayParameters from './array-parameters';

/**
 *  validate if value is array
 */

export default function ArrayParameter() : Validator<unknown, Array<any>, Readonly<Instance<unknown, string>>>;

export default function ArrayParameter<MessageType>(
    message : MessageCallback<Value, MessageType>
) : Validator<unknown, Array<any>, Readonly<Instance<unknown, MessageType>>>;

export default function ArrayParameter<MessageType>(
    message : MessageCallback<Value, MessageType|string> = ArrayMessage
) : Validator<unknown, Array<any>, Readonly<Instance<unknown, MessageType|string>>> {

    return ArrayParameters((value, valid) => message({valid, value}));
}
