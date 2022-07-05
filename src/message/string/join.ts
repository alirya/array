import Message from '@alirya/message/message.js';
import JoinObject from '../join.js';
import {JoinArgument} from '../join.js';

export function JoinParameters<MessageT extends Message<string>[]>(
    messages : MessageT,
    separator : string
) : string {

    return new JoinObject.Parameters(messages, separator).message;
}


export {JoinArgument};

export function JoinParameter<MessageT extends Message<string>[]>(
    {
        messages,
        separator,
    } : JoinArgument<MessageT>
) : string {

    return JoinParameters(messages, separator);
}


namespace Join {
    export const Parameters = JoinParameters;
    export const Parameter = JoinParameter;
    export type Argument<MessageT extends Message<string>[]> = JoinArgument<MessageT>;
}
export default Join;
