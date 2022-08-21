import Message from '@alirya/message/message';
import Validatable from '@alirya/validatable/validatable';
import InferMessage from '@alirya/message/message/infer';

export default function InvalidFirstValidLast<
    Messages extends (Message & Validatable)
>(
    list : Messages[],
) : InferMessage<Messages> {

    let validatable : undefined|Messages = undefined;

    for (let value of list) {

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