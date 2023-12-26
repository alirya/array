import Message from '@axiona/message/message.js';
import Validatable from '@axiona/validatable/validatable.js';
import InferMessage from '@axiona/message/message/infer.js';

export default function InvalidFirstValidLast<
    Messages extends (Message & Validatable)
>(
    list : Messages[],
) : InferMessage<Messages> {

    let validatable : undefined|Messages = undefined;

    for (const value of list) {

        if(!value.valid) {

            return value.message as InferMessage<Messages>;
        }

        validatable = value;

    }

    if(validatable && validatable.valid) {

        return validatable.message as InferMessage<Messages>;
    }

    throw new Error('messages list is empty');
}
